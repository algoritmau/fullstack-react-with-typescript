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

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from]

  return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
}

export function removeItemAtIndex<TItem>(
  array: TItem[],
  index: number
): TItem[] {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

export function insertItemAtIndex<TItem>(
  array: TItem[],
  item: TItem,
  index: number
): TItem[] {
  return [...array.slice(0, index), item, ...array.slice(index)]
}

type Item = {
  id: string
}
