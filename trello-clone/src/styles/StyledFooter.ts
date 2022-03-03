import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: #2b68a1;
  height: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  p,
  a {
    color: #d4e4f3;
    line-height: 128%;
  }

  a {
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    transition: color 0.2s ease-in;

    &:focus,
    &:hover {
      color: var(--color-white);
    }
  }
`
