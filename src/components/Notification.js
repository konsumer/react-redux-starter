import React from 'react'
import { connect } from 'react-redux'

import store from '../store'

const style = {
  Notification: {
    animationDuration: '0.25s',
    position: 'absolute',
    top: 10,
    right: 10,
    maxWidth: '50vw',
    zIndex: 10000
  },
  close: {
     marginLeft: 10
  }
}


export class Notification extends React.Component {
  onClose () {
    store.dispatch({type: 'notification/hide'})
    if (this && this.props && this.props.onClose) {
      this.props.onClose()
    }
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
    return (<div style={style.Notification} className={classes.join(' ')}>
      <div className='message-body' role='alert'>
        {message}
        {stay ? <button style={style.close} onClick={this.onClose.bind(this)} className='close'> <span>&times;</span> </button> : null}
      </div>
    </div>)
  }
}

Notification.propTypes = {
  message: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['info', 'success', 'error']),
  hidden: React.PropTypes.bool,
  stay: React.PropTypes.bool
}

Notification.defaultProps = {
  type: 'info',
  hidden: false,
  stay: false
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
