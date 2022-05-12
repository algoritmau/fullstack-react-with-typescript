import { FunctionComponent } from "react"

import clsx from "clsx"

import { NoteType } from "../../domain"

import styles from "../../styles/Key.module.css"

type KeyProps = {
  type: NoteType // used to define the styles of a key
  label: string
  disabled?: boolean
}

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest } = props

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  )
}
