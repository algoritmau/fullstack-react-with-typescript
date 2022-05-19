import { useEffect, useState } from "react"
import { Key as KeyLabel } from "../../domain"

type IsKeyPressed = boolean // Helps to determine if a user has pressed a key or not
type EventCode = string // Alias for event.code — Helps to determine which key has been pressed
type CallbackFunction = () => void

interface Settings {
  watchedKey: KeyLabel // The key to watch for
  onStartKeyPress: CallbackFunction
  onEndKeyPress: CallbackFunction
}

/**
 * Maps real keys with virtual ones, so that when a user presses a key, our app
 * would know what to do and what note to play. Implements an  Observer pattern.
 * Allows us to subscribe to keyPress events and react to them.
 * @param  {Settings}
 * @returns  IsKeyPressed - Whether the key was pressed or not
 */
export const useKeyPressObserver = ({
  watchedKey,
  onStartKeyPress,
  onEndKeyPress
}: Settings): IsKeyPressed => {
  const [pressed, setPressed] = useState<IsKeyPressed>(false)

  // Keep the state (pressed or not) in a local state of our component
  useEffect(() => {
    const handleKeyDown = ({ code }: KeyboardEvent): void => {
      if (pressed || !equal(watchedKey, code)) return

      setPressed(true)

      onStartKeyPress()
    }

    const handleKeyUp = ({ code }: KeyboardEvent): void => {
      if (!pressed || !equal(watchedKey, code)) return

      setPressed(false)

      onEndKeyPress()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("keyup", handleKeyUp)
    }
  }, [watchedKey, pressed, onStartKeyPress, onEndKeyPress])

  return pressed
}

/**
 * Filters out all the Key and Digit prefixes from the event.code
 * @param  {EventCode} code - The event code of the key pressed
 *                            e.g. KeyZ, KeyS, Digit9, or Digit4
 * @returns  {string} - The significant part of the code
 *                      e.g. `KeyZ` => `Z` | `Digit9` => `9`
 */
function fromEventCode(code: EventCode): KeyLabel {
  const prefixRegex = /Key|Digit/gi

  return code.replace(prefixRegex, "")
}

/**
 * Compares the label of both an observed key and the pressed key. If they are
 * the same, it means the user pressed an observed key
 * @param  {KeyLabel} watchedKey - The key to watch for
 * @param  {EventCode} eventCode - The event code of the key pressed
 * @returns  {boolean} - Whether the key was pressed or not
 */
function equal(watchedKey: KeyLabel, eventCode: EventCode): boolean {
  return fromEventCode(eventCode).toUpperCase() === watchedKey.toUpperCase()
}
