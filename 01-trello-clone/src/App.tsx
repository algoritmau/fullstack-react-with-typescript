import { useAppState } from './state/AppStateContext'

import { Column } from './Column'
import { AddNewItem } from './AddNewItem'
import { CustomDragLayer } from './CustomDragLayer'

import { addList } from './state/actions'

import { AppContainer } from './styles'

const App = () => {
  const { lists, dispatch } = useAppState()

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column title={list.text} id={list.id} key={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add Another list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  )
}

export default App
