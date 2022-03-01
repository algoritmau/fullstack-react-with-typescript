import { useState } from 'react'

import { NewItemForm } from './NewItemForm'

import { StyledAddItemButton } from '../styles'

interface AddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string // text to render when component is a button
  dark?: boolean // flag for styled-component
}

export const AddNewItem = ({
  onAdd,
  toggleButtonText,
  dark
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)

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
    <StyledAddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </StyledAddItemButton>
  )
}
