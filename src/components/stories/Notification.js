import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { withKnobs, text, boolean, select } from '@kadira/storybook-addon-knobs'

import { Notification } from '../Notification'

const stories = storiesOf('Notification', module)
stories.addDecorator(withKnobs)

stories.add('display a notification', () => (
  <Notification
    message={text('Message', 'Here is a message')}
    type={select('Type', ['info', 'success', 'error'], 'info')}
    hidden={boolean('Hidden', false)}
    stay={boolean('Stay', true)}
    onClose={ action('x-click')}
  />
))
  

