import { useRef } from 'react'

import { useDrop } from 'react-dnd'

import { useAppState } from '../state/AppStateContext'
import { addTask, moveList, moveTask, setDraggedItem } from '../state/actions'

import { getIsHidden, useItemDrag } from '../utils'

import { AddNewItem } from './AddNewItem'
import { Card } from './Card'

import { DragItem } from '../DragItem'

import { StyledColumnContainer, StyledColumnTitle } from '../styles'

type ColumnProps = {
  id: string
  title: string
  isPreview?: boolean
}

export const Column = ({ id, title, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  const draggedColumnRef = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: ['CARD', 'COLUMN'],
    hover: (item: DragItem) => {
      if (!item) return

      if (item.type === 'COLUMN') {
        if (item.id === id) return

        dispatch(moveList(item.id, id))
      } else {
        if (item.columnId === id || tasks.length) return

        dispatch(moveTask(item.id, null, item.columnId, id))
        dispatch(setDraggedItem({ ...item, columnId: id }))
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
      isHidden={getIsHidden(draggedItem, 'COLUMN', id, isPreview)}
      isPreview={isPreview}
    >
      <StyledColumnTitle tabIndex={1}>{title}</StyledColumnTitle>
      {tasks.map((task) => (
        <Card columnId={id} id={task.id} key={task.id} text={task.text} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </StyledColumnContainer>
  )
}
