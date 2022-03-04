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

    case 'MOVE_TASK':
      const { draggedItemId, hoveredItemId, sourceColumnId, targetColumnId } =
        action.payload
      const sourceListIndex = findItemIndexById(draft.lists, sourceColumnId)
      const targetListIndex2 = findItemIndexById(draft.lists, targetColumnId)
      const dragIndex = findItemIndexById(
        draft.lists[sourceListIndex].tasks,
        draggedItemId
      )
      const hoverIndex = hoveredItemId
        ? findItemIndexById(draft.lists[targetListIndex2].tasks, hoveredItemId)
        : 0
      const item = draft.lists[sourceListIndex].tasks[dragIndex]

      // Remove task from source list
      draft.lists[sourceListIndex].tasks.splice(dragIndex, 1)

      // Insert task into target list
      draft.lists[targetListIndex2].tasks.splice(hoverIndex, 0, item)

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
