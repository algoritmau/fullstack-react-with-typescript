import { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { moveTask } from './state/actions'
import { useAppState } from './state/AppStateContext'
import { CardContainer } from './styles'
import { isHidden } from './utils/isHidden'
import { useItemDrag } from './utils/useItemDrag'

type CardProps = {
  title: string
  id: string
  columnId: string
  isPreview?: boolean
}

export const Card = ({ title, id, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useAppState()
  const cardRef = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({
    type: 'CARD',
    id,
    columnId,
    title
  })

  const [, drop] = useDrop({
    accept: 'CARD',
    hover() {
      if (!draggedItem) return

      if (draggedItem.type !== 'CARD') return

      if (draggedItem.id === id) return

      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId))
    }
  })

  drag(drop(cardRef))

  return (
    <CardContainer
      ref={cardRef}
      isPreview={isPreview}
      isHidden={isHidden(draggedItem, 'CARD', id, isPreview)}
    >
      {title}
    </CardContainer>
  )
}
