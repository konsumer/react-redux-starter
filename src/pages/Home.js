import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

import { success, info, error } from '../api/notification'

const Home = ({children}) => (
  <div id='Home'>
    <h3>momentary notifications</h3>
    <ButtonToolbar>
      <Button onClick={() => success('cool success, bro')} bsStyle='success'>Success</Button>
      <Button onClick={() => info('wow, such info, useful')} bsStyle='info'>Info</Button>
      <Button onClick={() => error('scary situation coming up')} bsStyle='danger'>Danger</Button>
    </ButtonToolbar>
    <h3>notifications that stay</h3>
    <ButtonToolbar>
      <Button onClick={() => success('cool success, bro', true)} bsStyle='success'>Success</Button>
      <Button onClick={() => info('wow, such info, useful', true)} bsStyle='info'>Info</Button>
      <Button onClick={() => error('scary situation coming up', true)} bsStyle='danger'>Danger</Button>
    </ButtonToolbar>
  </div>
)

export default Home
