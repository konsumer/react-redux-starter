import React from 'react'
import { connect } from 'react-redux'

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
    marginLeft: 10,
    outline: 'none'
  }
}

const getClasses = (type, hidden) => {
  const classes = ['Notification', 'alert', 'animated']
  if (type === 'info') classes.push('alert-info')
  if (type === 'success') classes.push('alert-success')
  if (type === 'error') classes.push('alert-danger')
  classes.push(hidden ? 'fadeOutRight' : 'fadeInRight')
  return classes.join(' ')
}

export const Notification = ({type, message, hidden, stay, onClose}) => (
  <div style={style.Notification} className={getClasses(type, hidden)}>
    <div className='message-body' role='alert'>
      {message}
      {stay
        ? <button style={style.close} onClick={onClose} className='close'> <span>&times;</span> </button>
        : null
      }
    </div>
  </div>
)

Notification.propTypes = {
  message: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['info', 'success', 'error']),
  hidden: React.PropTypes.bool,
  stay: React.PropTypes.bool,
  onClose: React.PropTypes.func
}

Notification.defaultProps = {
  type: 'info',
  hidden: false,
  stay: false,
  onClose: () => {}
}

const mapStateToProps = store => ({
  message: store.notification.message,
  type: store.notification.type,
  hidden: store.notification.hidden,
  stay: store.notification.stay
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch({type: 'notification/hide'})
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
