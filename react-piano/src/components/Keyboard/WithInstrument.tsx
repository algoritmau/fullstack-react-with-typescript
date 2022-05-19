import { useEffect } from "react"

import { useAudioContext, useSoundfont } from "../../hooks"
import { useInstrument } from "../../state"

import { Keyboard } from "./Keyboard"

/**
 * Connects our Keyboard to the Soundfont provider
 * @return {React.FunctionComponent} - A Keyboard component
 */
export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!
  const { instrument } = useInstrument()
  const { loading, current, play, stop, load } = useSoundfont({ AudioContext })

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument)
  }, [load, loading, current, instrument])

  return <Keyboard loading={loading} play={play} stop={stop} />
}
