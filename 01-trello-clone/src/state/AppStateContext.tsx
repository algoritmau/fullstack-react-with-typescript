import { createContext, FC, useContext } from 'react'

// Data Structure available to all components through Context
const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }]
    },
    {
      id: '1',
      text: 'To Do',
      tasks: [{ id: 'c1', text: 'Learn TypeScript' }]
    },
    {
      id: '2',
      text: 'To Do',
      tasks: [{ id: 'c2', text: 'Begin to use static typing' }]
    }
  ]
}

// Omitting context's default value by passing an empty object casted to AppStateContextProps
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

export const AppStateProvider: FC = ({ children }) => {
  const { lists } = appData

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || []
  }

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  )
}

// Custom hook to access the context
export const useAppState = () => useContext(AppStateContext)

type Task = {
  id: string
  text: string
}

type List = {
  id: string
  text: string
  tasks: Task[]
}

export type AppState = {
  lists: List[]
}

type AppStateContextProps = {
  lists: List[]
  getTasksByListId(id: string): Task[]
}
