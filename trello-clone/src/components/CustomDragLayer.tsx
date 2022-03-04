import { useAppState } from '../state/AppStateContext'

import { useDragLayer } from 'react-dnd'

import { Card, Column } from '.'

import {
  StyledCustomDragLayerContainer,
  StyledDragPreviewWrapper
} from '../styles'

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState()
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }))

  return draggedItem && currentOffset ? (
    <StyledCustomDragLayerContainer>
      <StyledDragPreviewWrapper position={currentOffset}>
        {draggedItem.type === 'COLUMN' ? (
          <Column id={draggedItem.id} title={draggedItem.title} isPreview />
        ) : (
          <Card
            columnId={draggedItem.columnId}
            id={draggedItem.id}
            isPreview
            text={draggedItem.text}
          />
        )}
      </StyledDragPreviewWrapper>
    </StyledCustomDragLayerContainer>
  ) : null
}
