import { useAppState } from './state/AppStateContext'

import { addList } from './state/actions'

import { AddNewItem, Column, CustomDragLayer } from './components'

import { GlobalStyles } from './styles/GlobalStyles'
import { StyledAppContainer } from './styles'

export const App = () => {
  const { lists, dispatch } = useAppState()

  return (
    <>
      <GlobalStyles />
      <StyledAppContainer>
        <h1 className="title" tabIndex={1}>
          Trello Clone
        </h1>
        <div className="content">
          <CustomDragLayer />
          {lists.map((list) => (
            <Column key={list.id} id={list.id} title={list.text} />
          ))}
          <AddNewItem
            toggleButtonText="+ Add another list"
            onAdd={(text) => dispatch(addList(text))}
          />
        </div>
      </StyledAppContainer>
    </>
  )
}
