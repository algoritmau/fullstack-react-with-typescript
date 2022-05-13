import { useAudioContext } from "../../hooks"

import { KeyboardWithInstrument } from "../Keyboard"
import { NoAudioMessage } from "../NoAudioMessage"

export const Main = () => {
  const AudioContext = useAudioContext()

  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />
}
