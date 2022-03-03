import styled from 'styled-components'

interface DragPreviewContainerProps {
  isHidden?: boolean
  isPreview?: boolean
}

export const StyledDragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transform: ${(props) => (props.isPreview ? 'rotate(4deg)' : undefined)};
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`
