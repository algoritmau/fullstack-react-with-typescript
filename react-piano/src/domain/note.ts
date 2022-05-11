export type NoteType = "natural" | "flat" | "sharp"
export type NotePitch = "A" | "B" | "C" | "D" | "E" | "F" | "G"
export type OctaveIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type MidiValue = number // A number from the OctaveIndex
export type PitchIndex = number // The index of a given pitch in a 0-11 octave range

// Custom Note type
export type Note = {
  midi: MidiValue // a number in octave notation
  type: NoteType

  pitch: NotePitch
  index: PitchIndex
  octave: OctaveIndex
}

// Application constraints
const C1_MIDI_VALUE = 24
const C4_MIDI_VALUE = 60
const B5_MIDI_VALUE = 83

export const LOWER_NOTE = C1_MIDI_VALUE
export const UPPER_NOTE = B5_MIDI_VALUE
export const SEMITONES_PER_OCTAVE = 12

export const NATURAL_PITCH_INDICES: PitchIndex[] = [0, 2, 4, 5, 7, 9, 11]
export const PITCHES_REGISTRY: Record<PitchIndex, NotePitch> = {
  0: "C",
  1: "C",
  2: "D",
  3: "D",
  4: "E",
  5: "F",
  6: "F",
  7: "G",
  8: "G",
  9: "A",
  10: "A",
  11: "B"
}

// Generating notes
/**
 * Generates a note from a midi value
 * @param {MidiValue} midi - the midi value of the note
 * @returns a note object
 */
export const generateNote = (midi: MidiValue): Note => {
  const pianoRange = midi - C1_MIDI_VALUE

  // Determine in which octave the note is
  const octave = (Math.floor(pianoRange / SEMITONES_PER_OCTAVE) +
    1) as OctaveIndex

  // Determine what index this note has inside of its octave
  const index = pianoRange % SEMITONES_PER_OCTAVE

  // Get the pitch of the note
  const pitch = PITCHES_REGISTRY[index]

  const isSharp = !NATURAL_PITCH_INDICES.includes(index)
  const type = isSharp ? "sharp" : "natural"

  return { midi, type, pitch, index, octave }
}

// Create an initial set of notes
type NotesGeneratorSettings = {
  fromNote?: MidiValue
  toNote?: MidiValue
}

/**
 * Generates a set of notes from a given range of midi values
 * @param {}: NotesGeneratorSettings - settings object to use to generate initial notes
 * @returns an array of notes
 */
export const generateNotes = ({
  fromNote = LOWER_NOTE,
  toNote = UPPER_NOTE
}: NotesGeneratorSettings = {}): Note[] =>
  Array(toNote - fromNote + 1)
    .fill(0)
    .map((_, index: number) => generateNote(fromNote + index))

export const notes = generateNotes()
