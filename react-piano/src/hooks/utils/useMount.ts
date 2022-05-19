import { EffectCallback, useEffect } from "react"

const useEffectOnce = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [])
}

/**
 * Allows to run some code right after a component is mounted into the DOM
 * @param  {Effect} fn - A function to be called after a component is mounted
 */
export const useMount = (fn: Function) => {
  useEffectOnce(() => {
    fn()
  })
}
