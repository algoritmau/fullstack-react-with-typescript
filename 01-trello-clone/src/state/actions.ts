import { DragItem } from '../DragItem'

// Action creators
export const addList = (title: string): Action => ({
  type: 'ADD_LIST',
  payload: title
})

export const addTask = (text: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: { text, listId }
})

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: 'MOVE_LIST',
  payload: { draggedId, hoverId }
})

export const moveTask = (
  draggedItemId: string,
  hoveredItemId: string | null,
  sourceColumnId: string,
  targetColumnId: string
): Action => ({
  type: 'MOVE_TASK',
  payload: { draggedItemId, hoveredItemId, sourceColumnId, targetColumnId }
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem
})

export type Action =
  | {
      type: 'ADD_LIST'
      payload: string // list title
    }
  | {
      type: 'ADD_TASK'
      payload: {
        text: string // task body
        listId: string // ref to the list it belongs to
      }
    }
  | {
      type: 'MOVE_LIST'
      payload: {
        draggedId: string
        hoverId: string
      }
    }
  | {
      type: 'MOVE_TASK'
      payload: {
        draggedItemId: string // ref to the task being dragged
        hoveredItemId: string | null // ref to the task being hovered over
        sourceColumnId: string // ref to the list the task is being dragged from
        targetColumnId: string // ref to the list the task is being dragged to
      }
    }
  | {
      type: 'SET_DRAGGED_ITEM'
      payload: DragItem | null
    }
