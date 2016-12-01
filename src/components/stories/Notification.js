import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { Notification } from '../Notification'

console.log(process.env)

storiesOf('Notification', module)
  .add('success with a message and stay', () => (
    <Notification hidden={false} message='Here is a message' stay={true} type='success' onClose={ action('x-click')} />
  ))
  .add('success with a message and no stay', () => (
    <Notification hidden={false} message='Here is a message' stay={false} type='success' onClose={ action('x-click')} />
  ))
  .add('error with a message and stay', () => (
    <Notification hidden={false} message='Here is a message' stay={true} type='error' onClose={ action('x-click')} />
  ))
  .add('error with a message and no stay', () => (
    <Notification hidden={false} message='Here is a message' stay={false} type='error' onClose={ action('x-click')} />
  ))
  .add('error with a hide, message and stay', () => (
    <Notification hidden={true} message='Here is a message' stay={true} type='error' onClose={ action('x-click')} />
  ))
  .add('error with a hide, message and no stay', () => (
    <Notification hidden={true} message='Here is a message' stay={false} type='error' onClose={ action('x-click')} />
  ))

