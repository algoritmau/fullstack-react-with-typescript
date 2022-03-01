import { nanoid } from 'nanoid'

import { Action } from './actions'

import { DragItem } from '../DragItem'

import { findItemIndexById, moveItem } from '../utils'

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST':
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: []
      })
      break

    case 'ADD_TASK':
      const { text, listId } = action.payload
      const targetListIndex = findItemIndexById(draft.lists, listId)

      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text
      })

      break

    case 'MOVE_LIST':
      const { draggedId, targetId } = action.payload
      const draggedIndex = findItemIndexById(draft.lists, draggedId)
      const targetIndex = findItemIndexById(draft.lists, targetId)

      draft.lists = moveItem(draft.lists, draggedIndex, targetIndex)

      break

    case 'SET_DRAGGED_ITEM':
      draft.draggedItem = action.payload
      break

    default:
      break
  }
}

export type Task = {
  id: string
  text: string
}

export type List = {
  id: string
  text: string
  tasks: Task[]
}

export type AppState = {
  lists: List[]
  draggedItem: DragItem | null
}
