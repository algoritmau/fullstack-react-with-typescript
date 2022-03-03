import { DragItem } from '../DragItem'

/**
 * This function compares the type and id of the currently dragged item with
 * the type and id we pass to it as arguments.
 * @param  {DragItem|null} draggedItem
 * @param  {string} itemType
 * @param  {string} id
 * @param {boolean} isPreview
 * @return {boolean}
 */
export const getIsHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
  isPreview?: boolean
): boolean =>
  Boolean(
    !isPreview &&
      draggedItem &&
      draggedItem.type === itemType &&
      draggedItem.id === id
  )
