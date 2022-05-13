import { useAudioContext, useMount, useSoundfont } from "../../hooks"

import { Keyboard } from "./Keyboard"

/**
 * Connects our Keyboard to the Soundfont provider
 * @return {React.FunctionComponent} - A Keyboard component
 */
export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!
  const { loading, play, stop, load } = useSoundfont({ AudioContext })

  useMount(load)

  return <Keyboard loading={loading} play={play} stop={stop} />
}
