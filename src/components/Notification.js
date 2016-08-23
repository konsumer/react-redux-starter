import React from 'react'
import { connect } from 'react-redux'

import store from '../store'

export class Notification extends React.Component {
  onClose () {
    store.dispatch({type: 'notification/hide'})
  }
  render () {
    let {type, message, hidden, stay} = this.props
    if (!type) {
      return null
    }
    const classes = ['Notification', 'alert', 'animated']
    if (type === 'info') {
      classes.push('alert-info')
    }
    if (type === 'success') {
      classes.push('alert-success')
    }
    if (type === 'error') {
      classes.push('alert-danger')
    }
    if (hidden) {
      // classes.push('hidden')
      classes.push('fadeOutRight')
    } else {
      classes.push('fadeInRight')
    }
    return (<div className={classes.join(' ')}>
      <div className='message-body' role='alert'>
        {message}
        {stay ? <button onClick={this.onClose} className='close' dataDismiss='alert' ariaLabel='Close'> <span ariaHidden='true'>&times;</span> </button> : null}
      </div>
    </div>)
  }
}

const mapStateToProps = function (store) {
  return {
    message: store.notification.message,
    type: store.notification.type,
    hidden: store.notification.hidden,
    stay: store.notification.stay
  }
}

export default connect(mapStateToProps)(Notification)
