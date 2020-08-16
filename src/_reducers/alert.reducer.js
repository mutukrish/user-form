import {alertConstants} from '../_constants'

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
        data: action.data,
      }
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
        data: action.data,
      }
    case alertConstants.CLEAR:
      return {}
    default:
      return state
  }
}
