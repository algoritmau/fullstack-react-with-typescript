import { ChangeEvent } from "react"

import { InstrumentName } from "soundfont-player"
import { useInstrument } from "../../state"

import { options } from "./options"

import styles from "../../styles/InstrumentSelector.module.css"

export const InstrumentSelector = () => {
  // Get a current instrument value and a method for updating it.
  const { instrument, setInstrument } = useInstrument()

  /**
   * Takes an event and updates the instrument value.
   * @param target The event target
   */
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setInstrument(target.value as InstrumentName)

  return (
    <select
      className={styles.instruments}
      onChange={updateValue}
      value={instrument}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
