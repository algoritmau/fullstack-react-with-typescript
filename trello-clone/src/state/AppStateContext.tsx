import { createContext, Dispatch, useContext, useEffect } from "react"

import { withInitialState } from "../withInitialState"

import { useImmerReducer } from "use-immer"

import { AppState, appStateReducer, List, Task } from "./appStateReducer"
import { Action } from "./actions"

import { DragItem } from "../DragItem"

import { saveData } from "../api"

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    // Use useImmerReducer to mutate an object and create a new object
    // instance based on the mutations
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState)

    useEffect(() => {
      saveData(state)
    }, [state])

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
)

export const useAppState = () => useContext(AppStateContext)

type AppStateContextProps = {
  draggedItem: DragItem | null
  dispatch: Dispatch<Action>
  getTasksByListId(id: string): Task[]
  lists: List[]
}

type AppStateProviderProps = {
  children: React.ReactNode
  initialState: AppState
}
