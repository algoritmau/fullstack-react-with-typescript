import styled from 'styled-components'

export const StyledAppContainer = styled.main`
  background-color: var(--color-blue);
  color: var(--color-white);
  min-height: 40rem;
  height: 100vh;
  max-width: var(--max-width);
  padding: 2.4rem 2rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3.2rem 4rem;
  }

  @media (min-width: 1200px) {
    padding: 4rem 4.8rem;
  }

  .title {
    font-size: clamp(2.8rem, 6.4vw, 4.4rem);
    font-weight: 700;
    color: inherit;
    margin-block-end: 1.6rem;
    width: fit-content;

    @media (min-width: 768px) {
      margin-block-end: 2.4rem;
    }
  }

  .content {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    @media (min-width: 768px) {
      flex-direction: row;
      overflow-x: scroll;
      gap: 2rem;

      & > * {
        min-width: 30rem;
      }
    }
  }
`
