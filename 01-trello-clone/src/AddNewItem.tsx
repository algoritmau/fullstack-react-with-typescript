import { useState } from 'react'
import { NewItemForm } from './NewItemForm'
import { AddItemButton } from './styles'

type AddNewItemProps = {
  onAdd(text: string): void
  toggleButtonText: string
  isDark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const { onAdd, toggleButtonText, isDark } = props

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text)
          setShowForm(false)
        }}
      />
    )
  }

  return (
    <AddItemButton isDark={isDark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}
