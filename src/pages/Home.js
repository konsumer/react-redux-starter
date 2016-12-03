import React from 'react'
import { Link } from 'react-router'

import { success, error } from '../api/notification'
import HipsterIpsum from '../components/HipsterIpsum'

const Home = () => (
  <div id='Home' className='container'>
    <h2>o hey!</h2>
    <p>This isn't super-exciting yet. You can make it more exciting by adding some new page-routes to index.js and/or editing pages/Home.js where this text you see is located.</p>
    <h3>have fun!</h3>
    <p>
      <button className='btn btn-success' onClick={() => success('fun!')}>engage fun</button> &nbsp;
      <button className='btn btn-danger' onClick={() => error('no more fun!', true)}>disable fun</button>
    </p>
    <h3>hipster filler text</h3>
    <div><Link to='/demo'>click here</Link> to check out a demo route.</div>
    <HipsterIpsum />
  </div>
)

export default Home
