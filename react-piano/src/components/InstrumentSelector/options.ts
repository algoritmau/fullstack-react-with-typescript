import { InstrumentName } from "soundfont-player"
import instruments from "soundfont-player/names/musyngkite.json"

type Option = {
  value: InstrumentName
  label: string
}

type OptionsList = Option[]
type InstrumentsList = InstrumentName[]

/**
 * Converts instrument names provided by Soundfont into readable ones
 * @param  {InstrumentsList} instruments names provided by Soundfont
 * @return {OptionsList} array of readable instrument names
 */
const normalizeInstrumentsList = (instruments: InstrumentsList): OptionsList =>
  instruments.map((instrument) => ({
    value: instrument,
    label: instrument.replace(/_/gi, " ")
  }))

export const options = normalizeInstrumentsList(instruments as InstrumentsList)
