import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import store from '../store'

import AddressForm from '../components/ContactForm2'
import CarSpec from '../components/CarSpec'

export default class Address extends React.Component {
  onNext (values) {
    console.log('success', values)
  }

  render () {
    return (
      <div id='Address' className='container'>
        <div className='row'>
          <div className='col-sm-6'><CarSpec /></div>
          <div className='col-sm-6'><AddressForm onSubmit={this.onNext.bind(this)} /></div>
        </div>
      </div>
    )
  }
}
