import React, { FunctionComponent, useState } from "react"

import { DEFAULT_INSTRUMENT } from "../../domain"
import { InstrumentContext } from "./Context"

interface InstrumentContextProviderProps {
  children?: React.ReactNode
}

/**
 * Keeps the instrument value in a local state and exposes
 * the setInstrument() method to update that state
 */
export const InstrumentContextProvider: FunctionComponent<
  InstrumentContextProviderProps
> = ({ children }) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  )
}
