import React from 'react'
import { storiesOf, action} from '@kadira/storybook'
import { text, boolean, select } from '@kadira/storybook-addon-knobs'
import { Notification } from '../Notification'

const docs = `
This component handles toast notifications for *info*, *success*, and *error* type.

You can also use it like this:

\`\`\`
import { info, success, error } from './api/notification'
success('o cool!')
\`\`\`

The second parameter is \`stay\` and, if false, will trigger a hide message 3 seconds later.

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

  

