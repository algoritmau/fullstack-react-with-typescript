import { useRef } from 'react'

import { useDrop } from 'react-dnd'

import { useAppState } from '../state/AppStateContext'
import { addTask, moveList } from '../state/actions'

import { getIsHidden, useItemDrag } from '../utils'

import { AddNewItem } from './AddNewItem'
import { Card } from './Card'

import { StyledColumnContainer, StyledColumnTitle } from '../styles'

type ColumnProps = {
  id: string
  title: string
}

export const Column = ({ id, title }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  const draggedColumnRef = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover: () => {
      if (!draggedItem) return

      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) return

        dispatch(moveList(draggedItem.id, id))
      }
    }
  })
  const { drag } = useItemDrag({
    type: 'COLUMN',
    id,
    title
  })

  drag(drop(draggedColumnRef))

  return (
    <StyledColumnContainer
      ref={draggedColumnRef}
      isHidden={getIsHidden(draggedItem, 'COLUMN', id)}
    >
      <StyledColumnTitle>{title}</StyledColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </StyledColumnContainer>
  )
}
