import { useAppState } from '../state/AppStateContext'

import { useDragLayer } from 'react-dnd'

import { Column } from '.'

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
        <Column id={draggedItem.id} title={draggedItem.title} isPreview />
      </StyledDragPreviewWrapper>
    </StyledCustomDragLayerContainer>
  ) : null
}
