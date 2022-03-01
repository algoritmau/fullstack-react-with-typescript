import styled from 'styled-components'

import { DragPreviewContainer } from './DragPreviewContainer'

export const StyledCardContainer = styled(DragPreviewContainer)`
  background-color: var(--color-white);
  color: var(--color-black);
  font-family: inherit;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 1.2rem 1rem;
  /* max-width: 300px; */
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
`
