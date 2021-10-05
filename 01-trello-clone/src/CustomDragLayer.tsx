import { useAppState } from './state/AppStateContext'
import { useDragLayer } from 'react-dnd'
import { CustomDragLayerContainer, DragPreviewWrapper } from './styles'
import { Column } from './Column'
import { Card } from './Card'

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState()
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset()
  }))

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === 'COLUMN' ? (
          <Column id={draggedItem.id} title={draggedItem.title} isPreview />
        ) : (
          <Card
            columnId={draggedItem.columnId}
            isPreview
            id={draggedItem.id}
            title={draggedItem.title}
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null
}
