import React from 'react'
import {reduxForm} from 'redux-form'
import {Link} from 'react-router'
import {validate as step1validate} from './ContactForm1'

// TODO: fix unhandled props
// https://github.com/erikras/redux-form/issues/1249

export const validate = values => {
  const errors = {}
  if (!values.address) {
    errors.address = 'Required'
  } else if (values.address.length > 15) {
    errors.address = 'Must be 15 characters or less'
  }
  // since this is multipart, include 1st validation
  return Object.assign({}, step1validate(values), errors)
}

export class ContactForm2 extends React.Component {
  render () {
    const {fields: {address}, handleSubmit, submitting, pristine, invalid} = this.props
    return (
      <form noValidate onSubmit={handleSubmit}>
        <div className={'form-group' + ((address.touched && address.error) ? ' has-error' : '')}>
          <label htmlFor='name'>Address</label>
          <input className='form-control' id='name' type='text' placeholder='Address' {...address} />
          <small><div className='help-block'>{address.touched && address.error}{address.touched && !address.error && 'Address ok.'}&nbsp;</div></small>
        </div>
        <div className='form-group'>
          <Link className='btn btn-default' to='/'>Back</Link>&nbsp;
          <button disabled={submitting || pristine || invalid} className='btn btn-primary' type='submit'>Next</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'ContactForm',
  fields: ['address', 'name', 'birthday', 'email'],
  validate,
  destroyOnUnmount: false
})(ContactForm2)
