import {alertConstants} from '../_constants'

export const alertActions = {
  success,
  error,
  clear,
}

function success(message, data) {
  return {type: alertConstants.SUCCESS, message, data}
}

function error(message, data) {
  return {type: alertConstants.ERROR, message, data}
}

function clear() {
  return {type: alertConstants.CLEAR}
}
