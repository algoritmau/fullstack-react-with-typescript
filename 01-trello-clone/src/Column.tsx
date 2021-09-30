import { Card } from './Card'
import { AddNewItem } from './AddNewItem'

import { useAppState } from './state/AppStateContext'
import { addTask } from './state/actions'

import { ColumnContainer, ColumnTitle } from './styles'

export const Column = ({ title, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(id)

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} id={task.id} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        isDark
      />
    </ColumnContainer>
  )
}

type ColumnProps = {
  title: string
  id: string
}
