import { useAudioContext } from "../../hooks"

import { Playground } from "../Playground"
import { NoAudioMessage } from "../NoAudioMessage"

export const Main = () => {
  const AudioContext = useAudioContext()

  return !!AudioContext ? <Playground /> : <NoAudioMessage />
}
