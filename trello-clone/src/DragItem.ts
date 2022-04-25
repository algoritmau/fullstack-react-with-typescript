type CardDragItem = {
  type: "CARD"
  id: string
  text: string
  columnId: string
}

type ColumnDragItem = {
  type: "COLUMN"
  id: string
  title: string
}

export type DragItem = CardDragItem | ColumnDragItem
