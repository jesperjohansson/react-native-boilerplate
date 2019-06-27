import { UPDATE_EXAMPLE_TEXT } from '../actions/exampleActions'

export default function exampleReducer(
  state = { text: 'initial text' },
  action,
) {
  switch (action.type) {
    case UPDATE_EXAMPLE_TEXT:
      return {
        ...state,
        text: action.text,
      }

    default:
      return state
  }
}
