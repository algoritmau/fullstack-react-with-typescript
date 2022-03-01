import { useEffect, useRef } from 'react'

// Trigger focus on the input element
export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => ref.current?.focus(), [])

  return ref
}
