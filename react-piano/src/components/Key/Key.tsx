import { FunctionComponent } from "react"

import clsx from "clsx"

import { NoteType } from "../../domain"

import { useKeyPressObserver } from "../../hooks"

import styles from "../../styles/Key.module.css"

type PressCallback = () => void

interface KeyProps {
  type: NoteType // used to define the styles of a key
  label: string
  disabled?: boolean

  onDown: PressCallback
  onUp: PressCallback
}

export const Key: FunctionComponent<KeyProps> = ({
  type,
  label,
  onDown,
  onUp,
  ...rest
}) => {
  const pressed = useKeyPressObserver({
    watchedKey: label,
    onStartKeyPress: onDown,
    onEndKeyPress: onUp
  })

  const altClass = styles[`key--${type}`]

  return (
    <button
      className={clsx(
        `${styles.key} ${altClass} ${pressed && styles["is-pressed"]}`
      )}
      onMouseDown={onDown}
      onMouseUp={onUp}
      type="button"
      {...rest}
    >
      {label}
    </button>
  )
}
