import { useRef } from 'react'
import { useDrop } from 'react-dnd'

import { useAppState } from './state/AppStateContext'
import { addTask, moveList, moveTask, setDraggedItem } from './state/actions'

import { Card } from './Card'
import { AddNewItem } from './AddNewItem'

import { DragItem } from './DragItem'
import { useItemDrag } from './utils/useItemDrag'
import { isHidden } from './utils/isHidden'

import { ColumnContainer, ColumnTitle } from './styles'

type ColumnProps = {
  title: string
  id: string
  isPreview?: boolean
}

export const Column = ({ title, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  const columnRef = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover(item: DragItem) {
      if (!draggedItem) return

      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) return

        dispatch(moveList(draggedItem.id, id))
      } else {
        if (draggedItem.columnId === id) return

        if (tasks.length) return

        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id))
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }))
      }
    }
  })

  const { drag } = useItemDrag({ type: 'COLUMN', id, title })

  drag(drop(columnRef))

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={columnRef}
      isHidden={isHidden(draggedItem, 'COLUMN', id, isPreview)}
    >
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card title={task.text} id={task.id} columnId={id} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        isDark
      />
    </ColumnContainer>
  )
}
