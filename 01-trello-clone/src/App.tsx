import { AppContainer } from './styles'
import { Card } from './Card'
import { Column } from './Column'
import { AddNewItem } from './AddNewItem'

const App = () => {
  return (
    <AppContainer>
      <Column title="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column title="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column title="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log} />
    </AppContainer>
  )
}

export default App
