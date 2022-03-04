import { useRef } from 'react'

import { useDrop } from 'react-dnd'

import { useAppState } from '../state/AppStateContext'
import { moveTask } from '../state/actions'

import { getIsHidden, useItemDrag } from '../utils'

import { StyledCardContainer } from '../styles'

type CardProps = {
  columnId: string
  id: string
  isPreview?: boolean
  text: string
}

export const Card = ({ columnId, id, isPreview, text }: CardProps) => {
  const { draggedItem, dispatch } = useAppState()
  const draggedCardRef = useRef<HTMLDivElement>(null)

  const { drag } = useItemDrag({
    columnId,
    type: 'CARD',
    id,
    text
  })

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: () => {
      if (!draggedItem || draggedItem.type !== 'CARD' || draggedItem.id === id)
        return

      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId))
    }
  })

  drag(drop(draggedCardRef))

  return (
    <StyledCardContainer
      isHidden={getIsHidden(draggedItem, 'CARD', id, isPreview)}
      isPreview={isPreview}
      ref={draggedCardRef}
      tabIndex={1}
    >
      {text}
    </StyledCardContainer>
  )
}
