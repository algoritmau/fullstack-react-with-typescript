import React from 'react'
import { AddNewItem } from './AddNewItem'
import { ColumnContainer, ColumnTitle } from './styles'

type ColumnProps = {
  title: string
}

export const Column = ({
  title,
  children
}: React.PropsWithChildren<ColumnProps>) => (
  <ColumnContainer>
    <ColumnTitle>{title}</ColumnTitle>
    {children}
    <AddNewItem
      toggleButtonText="+Add another task"
      onAdd={console.log}
      isDark
    />
  </ColumnContainer>
)
