import { useAudioContext } from "../../hooks"

import { Keyboard } from "../Keyboard"
import { NoAudioMessage } from "../NoAudioMessage"

export const Main = () => {
  const AudioContext = useAudioContext()

  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />
}
