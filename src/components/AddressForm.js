import React from 'react'
import {reduxForm} from 'redux-form'
import {Link} from 'react-router'

// TODO: fix unhandled props
// https://github.com/erikras/redux-form/issues/1249

export const validate = values => {
  const errors = {}
  if (!values.address) {
    errors.address = 'Required'
  } else if (values.address.length > 15) {
    errors.address = 'Must be 15 characters or less'
  }
  return errors
}

export class AddressForm extends React.Component {
  render () {
    const {fields: {address}, handleSubmit, errors, submitting, pristine} = this.props
    return (
      <form onSubmit={handleSubmit} className='col-md-6'>
        <div className={'form-group' + ((address.touched && address.error) ? ' has-error' : '')}>
          <label htmlFor='name'>Address</label>
          <input className='form-control' id='name' type='text' placeholder='Address' {...address} />
          <small><div className='help-block'>{address.touched && address.error}{address.touched && !address.error && 'Address ok.'}&nbsp;</div></small>
        </div>
        <div className='form-group'>
          <Link className='btn btn-default' to='/'>Previous</Link>&nbsp;
          <button disabled={submitting || pristine || errors.address} className='btn btn-primary' type='submit'>Next</button>
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
})(AddressForm)
