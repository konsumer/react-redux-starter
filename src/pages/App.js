import React from 'react'

import Notification from '../components/Notification'

const App = ({children}) => (
  <div id='App'>
    <Notification />
    <section className='container-fluid'>
      {children}
    </section>
    <footer>Made with &hearts; by <a href="https://github.com/konsumer">konsumer</a>.</footer>
  </div>
)

export default App
