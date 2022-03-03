import styled from 'styled-components'

export const StyledDragPreviewWrapper =
  styled.div.attrs<DragPreviewWrapperProps>(
    ({ position: { x, y } }) => ({
      style: {
        transform: `translate(${x}px, ${y}px)`
      }
    })
  )<DragPreviewWrapperProps>``

type DragPreviewWrapperProps = {
  position: {
    x: number
    y: number
  }
}
