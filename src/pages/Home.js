import React from 'react'

import ContactForm from '../components/ContactForm1'
import CarSpec from '../components/CarSpec'

export default class Home extends React.Component {
  onNext (values) {
    this.props.history.push('/address')
  }

  render () {
    return (
      <div id='Home' className='container'>
        <div className='row'>
          <div className='col-sm-6'><CarSpec /></div>
          <div className='col-sm-6'><ContactForm onSubmit={this.onNext.bind(this)} /></div>
        </div>
      </div>
    )
  }
}
