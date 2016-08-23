import React from 'react'
import {reduxForm} from 'redux-form'

// TODO: fix unhandled props
// https://github.com/erikras/redux-form/issues/1249

export const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export class ContactForm extends React.Component {
  render () {
    const {fields: {firstName, lastName, email}, handleSubmit, submitting, pristine} = this.props
    return (
      <form onSubmit={handleSubmit} className='col-md-6'>
        <div className={'form-group' + (firstName.touched && firstName.error) ? ' has-error' : ''}>
          <label htmlFor='firstname'>First Name</label>
          <input className='form-control' id='firstname' type='text' placeholder='First Name' {...firstName} />
          <small><div className='help-block'>{firstName.touched && firstName.error}&nbsp;</div></small>
        </div>
        <div className={'form-group' + (lastName.touched && lastName.error) ? ' has-error' : ''}>
          <label htmlFor='lastname'>Last Name</label>
          <input className='form-control' id='lastname' type='text' placeholder='Last Name' {...lastName} />
          <small><div className='help-block'>{lastName.touched && lastName.error}&nbsp;</div></small>
        </div>
        <div className={'form-group' + (email.touched && email.error) ? ' has-error' : ''}>
          <label htmlFor='email'>Email</label>
          <input className='form-control' id='email' type='email' placeholder='Email' {...email} />
          <small><div className='help-block'>{email.touched && email.error}&nbsp;</div></small>
        </div>
        <div className='form-group'>
          <button disabled={submitting || pristine} className='btn btn-primary' type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'ContactForm',
  fields: ['firstName', 'lastName', 'email'],
  validate
})(ContactForm)
