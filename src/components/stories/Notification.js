import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import { Notification } from '../Notification'

storiesOf('Notification', module)
  .add('success with a message and stay', () => (
    <Notification hidden={false} message='Here is a message' stay={true} type='success' />
  ))
  .add('success with a message and no stay', () => (
    <Notification hidden={false} message='Here is a message' stay={false} type='success'/>
  ))
  .add('error with a message and stay', () => (
    <Notification hidden={false} message='Here is a message' stay={true} type='error'/>
  ))
  .add('error with a message and no stay', () => (
    <Notification hidden={false} message='Here is a message' stay={false} type='error'/>
  ))
  .add('error with a hide, message and stay', () => (
    <Notification hidden={true} message='Here is a message' stay={true} type='error'/>
  ))
  .add('error with a hide, message and no stay', () => (
    <Notification hidden={true} message='Here is a message' stay={false} type='error'/>
  ))

