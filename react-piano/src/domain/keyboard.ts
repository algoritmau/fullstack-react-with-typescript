import { OctaveIndex, PitchIndex } from "./note"

export type Key = string // a type-alias for representing letter key labels
export type Keys = Key[] // an array of those labels

export const TOP_ROW = Array.from("q2w3er5t6y7u")
export const BOTTON_ROW = Array.from("zsxdcvgbhnjm")

/**
 * @param  {OctaveIndex} octave - octave index that we are choosing a key by
 * @param  {PitchIndex} index - pitch index to select from the chosen octave
 * @returns keysRow[index] - a letter for our key label
 */
export const selectKey = (octave: OctaveIndex, index: PitchIndex): Key => {
  const keysRow = octave < 5 ? TOP_ROW : BOTTON_ROW

  return keysRow[index]
}
