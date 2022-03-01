import styled from 'styled-components'

export const StyledNewItemButton = styled.button`
  background-color: var(--color-green);
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: var(--color-white);
  padding: 0.8rem 1.2rem;
  text-align: center;
  transition: background-color 85ms ease-in;

  &:focus,
  &:hover {
    background-color: var(--color-green-dark);
    cursor: pointer;
  }
`
