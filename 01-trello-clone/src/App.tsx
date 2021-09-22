import { useAppState } from './state/AppStateContext'

import { Column } from './Column'
import { AddNewItem } from './AddNewItem'

import { AppContainer } from './styles'

const App = () => {
  const { lists } = useAppState()
  return (
    <AppContainer>
      {lists.map((list) => (
        <Column title={list.text} id={list.id} key={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add Another list" onAdd={console.log} />
    </AppContainer>
  )
}

export default App
