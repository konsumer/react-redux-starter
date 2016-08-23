import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Notification } from '../../src/components/Notification'

/* global describe, it */

describe('components/Notification', () => {
  it('should handle success(msg)', () => {
    const mounted = shallow(<Notification type='success' message='cool' hidden={false} stay={false} />)
    expect(mounted.node.props.className).to.equal('Notification alert animated alert-success fadeInRight')
    expect(mounted.node.props.children.props.children).to.deep.equal(['cool', null])
  })
  it('should handle info(msg, true)', () => {
    const mounted = shallow(<Notification type='info' message='cool' hidden={false} stay />)
    expect(mounted.node.props.className).to.equal('Notification alert animated alert-info fadeInRight')
    expect(mounted.node.props.children.props.children.length).to.equal(2)
    expect(mounted.node.props.children.props.children[1].type).to.equal('button')
  })
})
