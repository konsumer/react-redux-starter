import React from 'react'
import ContactForm from '../components/ContactForm'
import {success} from '../api/notification'

const Foo = ({children}) => (
  <div id='Foo'>
    <ContactForm onSubmit={(values) => success('FORM SUBMITTED!')} />
  </div>
)

export default Foo
