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

// Action creators
export const addList = (title: string): Action => ({
  type: 'ADD_LIST',
  payload: title
})

export const addTask = (text: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: { text, listId }
})
