import { DragItem } from '../DragItem'
/**
 * Compares currently dragged item's type/id with the target's type/id
 * @param  {DragItem|null} draggedItem - currently dragged item
 * @param  {string} itemType - target dragged item's type
 * @param  {string} id - target dragged item's id
 * @returns {boolean} - true if the target is the same as the dragged item
 */
export const isHidden = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string
): boolean =>
  Boolean(draggedItem && draggedItem.type === itemType && draggedItem.id === id)
