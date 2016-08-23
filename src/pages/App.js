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
    <footer className='footer'>
      <div className='container'>
        <p className='text-muted'>Made with &hearts; by <a href='https://github.com/konsumer'>konsumer</a></p>
      </div>
    </footer>
  </div>
)

export default App
