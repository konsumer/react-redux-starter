import React from 'react'
import {reduxForm} from 'redux-form'

// TODO: fix unhandled props
// https://github.com/erikras/redux-form/issues/1249

export const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.birthday) {
    errors.birthday = 'Required'
  }
  return errors
}

export class ContactForm extends React.Component {
  render () {
    const {fields: {name, birthday, email}, handleSubmit, errors, submitting, pristine} = this.props
    return (
      <form onSubmit={handleSubmit} className='col-md-6'>
        <div className={'form-group' + ((name.touched && name.error) ? ' has-error' : '')}>
          <label htmlFor='name'>Name</label>
          <input className='form-control' id='name' type='text' placeholder='Name' {...name} />
          <small><div className='help-block'>{name.touched && name.error}{name.touched && !name.error && 'Name ok.'}&nbsp;</div></small>
        </div>
        <div className={'form-group' + ((email.touched && email.error) ? ' has-error' : '')}>
          <label htmlFor='email'>Email</label>
          <input className='form-control' id='email' type='email' placeholder='Email' {...email} />
          <small><div className='help-block'>{email.touched && email.error}{email.touched && !email.error && 'Email ok.'}&nbsp;</div></small>
        </div>
        <div className={'form-group' + ((birthday.touched && birthday.error) ? ' has-error' : '')}>
          <label htmlFor='birthday'>Birthday</label>
          <input className='form-control' id='birthday' type='date' placeholder='Birthday' {...birthday} />
          <small><div className='help-block'>{birthday.touched && birthday.error}{birthday.touched && !birthday.error && 'Birthday ok.'}&nbsp;</div></small>
        </div>
        <div className='form-group'>
          <button disabled={submitting || pristine || errors.email || errors.name || errors.birthday} className='btn btn-primary' type='submit'>Next</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  // all multiparts must have same name
  form: 'ContactForm',
  fields: ['name', 'birthday', 'email'],
  validate,
  // keep values in store for multi-part form
  // see https://github.com/erikras/redux-form/issues/260
  destroyOnUnmount: false
})(ContactForm)
