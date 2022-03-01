import { createContext, Dispatch, FC, useContext } from 'react'

import { useImmerReducer } from 'use-immer'

import { AppState, appStateReducer, List, Task } from './appStateReducer'
import { Action } from './actions'

import { DragItem } from '../DragItem'

// App's data structure available to all components via React's Context API
const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [
        {
          id: 'c0',
          text: 'Become a full-stack developer'
        }
      ]
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [
        {
          id: 'c2',
          text: 'Learn TypeScript'
        }
      ]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [
        {
          id: 'c3',
          text: 'Master JavaScript fundamentals'
        }
      ]
    }
  ],
  draggedItem: null
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

export const AppStateProvider: FC = ({ children }) => {
  // Use useImmerReducer to mutate an object and create a new object instance based on the mutations
  const [state, dispatch] = useImmerReducer(appStateReducer, appData)

  const { draggedItem, lists } = state
  const getTasksByListId = (id: string) =>
    lists.find((list) => list.id === id)?.tasks || []

  return (
    <AppStateContext.Provider
      value={{ draggedItem, lists, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => useContext(AppStateContext)

type AppStateContextProps = {
  draggedItem: DragItem | null
  dispatch: Dispatch<Action>
  getTasksByListId(id: string): Task[]
  lists: List[]
}
