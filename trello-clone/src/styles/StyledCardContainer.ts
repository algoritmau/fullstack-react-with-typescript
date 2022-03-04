import styled from 'styled-components'

import { StyledDragPreviewContainer } from './StyledDragPreviewContainer'

export const StyledCardContainer = styled(StyledDragPreviewContainer)`
  background-color: var(--color-white);
  color: var(--color-black);
  font-family: inherit;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 1.2rem 1rem;
  /* max-width: 300px; */
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  max-width: 300px;
`
