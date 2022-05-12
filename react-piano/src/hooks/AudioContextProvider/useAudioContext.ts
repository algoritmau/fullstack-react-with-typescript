import { useRef } from "react"

import { accessAudioContext, Optional } from "../../domain"

export const useAudioContext = (): Optional<AudioContextType> => {
  const AudioCtx = useRef(accessAudioContext())

  return AudioCtx.current
}
