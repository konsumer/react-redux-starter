import React from 'react'
import { storiesOf } from '@kadira/storybook'
import HipsterIpsum from '../HipsterIpsum'

storiesOf('Hipster Ipsum', module)
	.addWithInfo('simple usage', 'Stupid demo component with funny text', () => (
	  <HipsterIpsum />
	))

  

