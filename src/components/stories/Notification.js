import React from 'react'
import { storiesOf, action} from '@kadira/storybook'
import { text, boolean, select } from '@kadira/storybook-addon-knobs'

import { Notification } from '../Notification'

const docs = `
This component handles toast notifications for "info", "success", and "error" type.
`

storiesOf('Notification', module)
	.addWithInfo('simple usage', docs, () => (
	  <Notification
	  	message={text('Message', 'Here is a message')}
	    type={select('Type', ['info', 'success', 'error'], 'info')}
	    hidden={boolean('Hidden', false)}
	    stay={boolean('Stay', true)}
	    onClose={ action('close')}
	  />
	))

  

