import { Optional } from "./types"

/**
 * Checks if a browser supports AudioContext
 * @returns Optional<AudioContextType> - the AudioContext, if supported
 */
export const accessAudioContext = (): Optional<AudioContextType> =>
  window.AudioContext || window.webkitAudioContext || null
