import styled from 'styled-components'

interface StyledAddItemButtonProps {
  dark?: boolean
}

export const StyledAddItemButton = styled.button<StyledAddItemButtonProps>`
  background-color: #08080812;
  font-family: var(--font-inter);
  border-radius: 3px;
  border: none;
  color: ${(props) =>
    props.dark ? 'var(--color-black)' : 'var(--color-white)'};
  cursor: pointer;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  min-height: 4rem;
  width: 100%;

  &:focus,
  &:hover {
    background-color: #ffffff52;
  }
`
