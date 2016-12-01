import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs'

import { Notification } from '../Notification'

console.log(process.env)

const stories = storiesOf('Notification', module)
stories.addDecorator(withKnobs)

stories.add('basic', () => (
  <Notification
    hidden={boolean('Hidden', false)}
    message={text('Message', 'Here is a message')}
    stay={boolean('Stay', true)}
    type={select('Type', ['info', 'success', 'error'], 'info')}
    onClose={ action('x-click')}
  />
))
  

