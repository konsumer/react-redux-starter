import store from '../store'

var timer

export function notification (message, type, stay) {
  clearTimeout(timer)
  return new Promise(resolve => {
    store.dispatch({type: `notification/${type || 'default'}`, message: message, stay: Boolean(stay)})
    if (!stay) {
      timer = setTimeout(() => {
        store.dispatch({type: 'notification/hide'})
        resolve()
      }, 2000)
    } else {
      resolve()
    }
  })
}

export function success (message, stay) {
  return notification(message, 'success', stay)
}

export function info (message, stay) {
  return notification(message, 'info', stay)
}

export function error (message, stay) {
  return notification(message, 'error', stay)
}

export function reducer (state = {message: false, type: false, hidden: true, stay: false}, action) {
  let newState
  switch (action.type) {
    case 'notification/info':
    case 'notification/success':
    case 'notification/error':
    case 'notification/default':
      return {
        hidden: false,
        message: action.message,
        type: action.type.replace('notification/', ''),
        stay: action.stay
      }
    case 'notification/hide':
      newState = Object.assign({}, state)
      newState.hidden = true
      return newState
    default:
      return state
  }
}
