import { useRef, useState } from "react"

import {
  AudioNodesRegistry,
  DEFAULT_INSTRUMENT,
  MidiValue,
  Optional
} from "../../../domain"

import Soundfont, { InstrumentName, Player } from "soundfont-player"

// Describes what our useSoundfont() adapter hook requires as arguments
// an AudioContext constructor
interface Settings {
  AudioContext: AudioContextType
}

// Specifies what kind of object is returned from the hook
interface Adapted {
  loading: boolean // true when Soundfont loads the instrument sounds set. Helpful to disable Keyboard while loading
  current: Optional<InstrumentName> // current instrument

  load(instrument?: InstrumentName): Promise<void>
  play(note: MidiValue): Promise<void>
  stop(note: MidiValue): Promise<void>
}
/**
 * @param  {Settings} {AudioContext} - AudioContext constructor
 * @return {Adapted} - Object with adaptted Soundfont functionality.
 *                     loading state, current instrument, and 3 methods for controlling
 *                     the player: load(), play(), and stop()
 */
export const useSoundfont = ({ AudioContext }: Settings): Adapted => {
  // adapter's local state
  let activeNodes: AudioNodesRegistry = {} // an object with AudioNode items

  const [current, setCurrent] = useState<Optional<InstrumentName>>(null)

  // indicates whether an instrument is being loaded or not
  const [loading, setLoading] = useState<boolean>(false)

  // A Soundfont Player instance, which helps us perform musical operations.
  const [player, setPlayer] = useState<Optional<Player>>(null)

  const audio = useRef(new AudioContext())

  const load = async (instrument: InstrumentName = DEFAULT_INSTRUMENT) => {
    setLoading(true)

    const player = await Soundfont.instrument(audio.current, instrument)

    setLoading(false)
    setCurrent(instrument)
    setPlayer(player)
  }

  /**
   * Checks what state audio is in right now
   */
  const resume = async () =>
    audio.current.state === "suspended"
      ? await audio.current.resume()
      : Promise.resolve()

  const play = async (note: MidiValue) => {
    await resume()

    if (!player) return

    const node = player.play(note.toString())
    activeNodes = { ...activeNodes, [note]: node }
  }

  const stop = async (note: MidiValue) => {
    await resume()

    if (!activeNodes[note]) return

    activeNodes[note]!.stop()

    activeNodes = { ...activeNodes, [note]: null }
  }

  return {
    loading,
    current,

    load,
    play,
    stop
  }
}
