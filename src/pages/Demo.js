import React from 'react'
import { Link } from 'react-router'

export default () => (
  <div id='Demo'>
    <p> This is just a component to test the router. </p>
    <p> <Link to='/'>click here</Link> to go back. </p>
  </div>
)
