/**
 * Finds the index of an array item by its id.
 * Accepts any object that has an `id` property.
 * @param  {TItem[]} items - Array of items
 * @param  {string} id - Id of the item to find
 * @returns {number} - Index of the item in the array
 */
export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => items.findIndex((item: TItem) => item.id === id)

type Item = {
  id: string
}
