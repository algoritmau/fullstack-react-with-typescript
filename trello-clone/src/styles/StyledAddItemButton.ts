import styled from 'styled-components'

interface StyledAddItemButtonProps {
  dark?: boolean
}

export const StyledAddItemButton = styled.button<StyledAddItemButtonProps>`
  background-color: #ffffff3d;
  font-family: var(--font-inter);
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? '#000' : '#fff')};
  cursor: pointer;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;

  &:focus,
  &:hover {
    background-color: #ffffff52;
  }
`
