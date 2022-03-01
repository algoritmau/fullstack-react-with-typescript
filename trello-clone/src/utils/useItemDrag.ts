import { useDrag } from 'react-dnd'

import { useAppState } from '../state/AppStateContext'

import { setDraggedItem } from '../state/actions'

import { DragItem } from '../DragItem'
/**
 * @param  { DragItem } item
 * @return fn() - drag: a method that accepts the ref of a draggable element
 */
export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag] = useDrag({
    type: item.type, // 'CARD' or 'COLUMN'
    item: () => {
      dispatch(setDraggedItem(item))

      return item
    },
    end: () => dispatch(setDraggedItem(null))
  })

  return { drag }
}
