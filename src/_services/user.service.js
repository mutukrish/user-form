import {userApi} from '../_constants'
export const userService = {
  register,
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  }

  return fetch(`${userApi.CREATEUSER}`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)
    return data
  })
}
