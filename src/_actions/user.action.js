import {userService} from '../_services'
import {alertActions} from './'

export const userActions = {
  register,
}

function register(user) {
  return (dispatch) => {
    userService.register(user).then(
      (user) => {
        console.log(user)
        dispatch(alertActions.success('Registration successful', user))
      },
      (error) => {
        dispatch(alertActions.error(error.toString()))
      },
    )
  }
}
