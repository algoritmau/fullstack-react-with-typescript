import { MidiValue, notes, selectKey } from "../../domain"

import { Key } from "../Key"

import styles from "../../styles/Keyboard.module.css"
import { FunctionComponent } from "react"

export interface KeyboardProps {
  loading: boolean
  play(note: MidiValue): Promise<void>
  stop(note: MidiValue): Promise<void>
}

export const Keyboard: FunctionComponent<KeyboardProps> = ({
  loading,
  stop,
  play
}) => (
  <div className={styles.container}>
    {notes.map(({ midi, type, index, octave }) => {
      const label = selectKey(octave, index)

      return (
        <Key
          key={midi}
          type={type}
          label={label}
          disabled={loading}
          onDown={() => play(midi)}
          onUp={() => stop(midi)}
        />
      )
    })}
  </div>
)
