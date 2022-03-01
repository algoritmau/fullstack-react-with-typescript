import { DragItem } from '../DragItem'

type AddListAction = {
  type: 'ADD_LIST'
  payload: string
}

type AddTaskAction = {
  type: 'ADD_TASK'
  payload: {
    text: string
    listId: string
  }
}

type MoveList = {
  type: 'MOVE_LIST'
  payload: {
    draggedId: string
    targetId: string
  }
}

type SetDraggedItem = {
  type: 'SET_DRAGGED_ITEM'
  payload: DragItem | null
}

export type Action = AddListAction | AddTaskAction | MoveList | SetDraggedItem

// Action creators
export const addList = (text: string): Action => ({
  type: 'ADD_LIST',
  payload: text
})

export const addTask = (text: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: {
    text,
    listId
  }
})

export const moveList = (draggedId: string, targetId: string): Action => ({
  type: 'MOVE_LIST',
  payload: {
    draggedId,
    targetId
  }
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem
})
