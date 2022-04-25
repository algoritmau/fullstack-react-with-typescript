import { ComponentType, useEffect, useState } from "react"
import { loadData } from "./api"

import { AppState } from "./state/appStateReducer"

type InjectedProps = {
  initialState: AppState
}

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: null
    })
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | undefined>()

    useEffect(() => {
      const fecthInitialState = async () => {
        try {
          const data = await loadData()
          setInitialState(data)
        } catch (e) {
          setError(e as Error)
        }

        setIsLoading(false)
      }

      fecthInitialState()
    }, [])

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    return <WrappedComponent initialState={initialState} {...props} />
  }
}
