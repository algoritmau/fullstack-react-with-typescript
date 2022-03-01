import React, { useState } from 'react'
import { useFocus } from '../utils'

import {
  StyledNewItemButton,
  StyledNewItemFormContainer,
  StyledNewItemInput
} from '../styles'

interface NewItemFormProps {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState('')
  const inputRef = useFocus()
  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.key === 'Enter' ? onAdd(text) : null

  return (
    <StyledNewItemFormContainer>
      <StyledNewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleSubmit}
      />
      <StyledNewItemButton onClick={() => onAdd(text)}>
        Create
      </StyledNewItemButton>
    </StyledNewItemFormContainer>
  )
}
