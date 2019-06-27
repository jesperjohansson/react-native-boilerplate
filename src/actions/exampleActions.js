export const UPDATE_EXAMPLE_TEXT = 'UPDATE_EXAMPLE_TEXT'

export function updateExampleText(text) {
  return {
    type: UPDATE_EXAMPLE_TEXT,
    text,
  }
}
