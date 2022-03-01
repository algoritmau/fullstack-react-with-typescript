type Item = {
  id: string
}
/**
 * Finds an item in an array by its id. Generic function that accepts any object with an id field.
 * @param {string} id - id of the item to find
 * @param {TItem[]} items - array of items
 * @returns number - index of the item with the given id
 */
export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => items.findIndex((item: TItem) => item.id === id)

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from]

  return insertItemAtIndex(removeItemAtIndex(array, from), item, to)
}

const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
  const result = [...array]

  result.splice(index, 1)

  return result
}

const insertItemAtIndex = <TItem>(
  array: TItem[],
  item: TItem,
  index: number
) => {
  const result = [...array]

  result.splice(index, 0, item)

  return result
}
