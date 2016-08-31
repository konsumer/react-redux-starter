import React from 'react'

import Notification from '../components/Notification'
import Navbar from '../components/Navbar'

const App = ({children}) => (
  <div id='App'>
    <Notification />
    <Navbar />
    <section className='container-fluid'>
      {children}
    </section>
  </div>
)

export default App
