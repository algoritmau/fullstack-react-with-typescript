import { CardContainer } from './styles'

type CardProps = {
  text: string
}

export const Card = ({ text }: CardProps) => (
  <CardContainer>{text}</CardContainer>
)
