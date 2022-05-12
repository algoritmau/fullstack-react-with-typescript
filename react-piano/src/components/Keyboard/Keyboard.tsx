import { notes, selectKey } from "../../domain"

import { Key } from "../Key"

import styles from "../../styles/Keyboard.module.css"

export const Keyboard = () => (
  <div className={styles.container}>
    {notes.map(({ midi, type, index, octave }) => {
      const label = selectKey(octave, index)

      return <Key key={midi} type={type} label={label} />
    })}
  </div>
)
