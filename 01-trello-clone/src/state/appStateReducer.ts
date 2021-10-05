import { nanoid } from 'nanoid'
import { Action } from './actions'
import { findItemIndexById, moveItem } from '../utils/arrayUtils'
import { DragItem } from '../DragItem'

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
      const { draggedId, hoverId } = action.payload
      const dragIndex = findItemIndexById(draft.lists, draggedId)
      const hoverIndex = findItemIndexById(draft.lists, hoverId)

      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
      break

    case 'MOVE_TASK':
      const { draggedItemId, hoveredItemId, sourceColumnId, targetColumnId } =
        action.payload
      const sourceListIndex = findItemIndexById(draft.lists, sourceColumnId) // get the source list indices
      const targetListIndex2 = findItemIndexById(draft.lists, targetColumnId) // get the target list indices
      const draggedItemIndex = findItemIndexById(
        draft.lists[sourceListIndex].tasks,
        draggedItemId
      ) // get the dragged item index
      const hoveredItemIndex = hoveredItemId
        ? findItemIndexById(draft.lists[targetListIndex2].tasks, hoveredItemId)
        : 0 // get the hovered item index
      const movedItem = draft.lists[sourceListIndex].tasks[draggedItemIndex] // get the dragged item

      draft.lists[sourceListIndex].tasks.splice(draggedItemIndex, 1) // remove the dragged item from the source list
      draft.lists[targetListIndex2].tasks.splice(hoveredItemIndex, 0, movedItem) // insert the dragged item into the target list

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
