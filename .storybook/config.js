import { configure, setAddon, addDecorator } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'
import { withKnobs } from '@kadira/storybook-addon-knobs'

setAddon(infoAddon)
addDecorator(withKnobs)

function loadStories () {
  require('./style.scss')
  require('../src/components/stories')
}

configure(loadStories, module)
