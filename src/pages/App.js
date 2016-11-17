import React from 'react'

import Notification from '../components/Notification'

const App = ({children}) => (
  <div id='App'>
    <Notification />
    <section className='container-fluid'>
      {children}
    </section>
  </div>
)

export default App
