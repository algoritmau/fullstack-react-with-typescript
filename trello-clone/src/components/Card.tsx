import { StyledCardContainer } from '../styles'

type CardProps = {
  id: string
  text: string
}

export const Card = ({ text }: CardProps) => (
  <StyledCardContainer>{text}</StyledCardContainer>
)
