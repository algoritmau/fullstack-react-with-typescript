import { useRef } from 'react'

import { Card } from './Card'
import { AddNewItem } from './AddNewItem'

import { useAppState } from './state/AppStateContext'
import { addTask, moveList } from './state/actions'

import { ColumnContainer, ColumnTitle } from './styles'
import { useItemDrag } from './utils/useItemDrag'
import { useDrop } from 'react-dnd'
import { isHidden } from './utils/isHidden'

export const Column = ({ title, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)
  const columnRef = useRef<HTMLDivElement>(null)

  const { drag } = useItemDrag({ type: 'COLUMN', id, title })
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover() {
      if (!draggedItem) return

      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) return

        dispatch(moveList(draggedItem.id, id))
      }
    }
  })

  drag(drop(columnRef))

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={columnRef}
      isHidden={isHidden(draggedItem, 'COLUMN', id, isPreview)}
    >
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} id={task.id} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        isDark
      />
    </ColumnContainer>
  )
}

type ColumnProps = {
  title: string
  id: string
  isPreview?: boolean
}
