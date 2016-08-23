import { expect } from 'chai'
import { spy as spyOn, useFakeTimers } from 'sinon'

import { success, info, error, reducer } from '../../src/api/notification'
import store from '../../src/store'

/* global describe, it, beforeEach, afterEach */

describe('api/notification', () => {
  let clock

  beforeEach(() => {
    spyOn(store, 'dispatch')
    clock = useFakeTimers()
  })

  afterEach(() => {
    store.dispatch.restore()
    clock.restore()
  })

  it('should handle success(msg)', () => {
    success('cool')
    clock.tick(5000)
    expect(store.dispatch.callCount).to.equal(2)
    expect(store.dispatch.getCall(0).args[0])
      .to.deep.equal({ type: 'notification/success', message: 'cool', stay: false })
    expect(store.dispatch.getCall(1).args[0])
      .to.deep.equal({ type: 'notification/hide' })
  })

  it('should handle success(msg, true)', () => {
    success('cool', true)
    clock.tick(5000)
    expect(store.dispatch.callCount).to.equal(1)
    expect(store.dispatch.getCall(0).args[0])
      .to.deep.equal({ type: 'notification/success', message: 'cool', stay: true })
  })

  it('should handle error(msg)', () => {
    error('cool')
    clock.tick(5000)
    expect(store.dispatch.callCount).to.equal(2)
    expect(store.dispatch.getCall(0).args[0])
      .to.deep.equal({ type: 'notification/error', message: 'cool', stay: false })
    expect(store.dispatch.getCall(1).args[0])
      .to.deep.equal({ type: 'notification/hide' })
  })

  it('should handle error(msg, true)', () => {
    error('cool', true)
    clock.tick(5000)
    expect(store.dispatch.callCount).to.equal(1)
    expect(store.dispatch.getCall(0).args[0])
      .to.deep.equal({ type: 'notification/error', message: 'cool', stay: true })
  })

  it('should handle info(msg)', () => {
    info('cool')
    clock.tick(5000)
    expect(store.dispatch.callCount).to.equal(2)
    expect(store.dispatch.getCall(0).args[0])
      .to.deep.equal({ type: 'notification/info', message: 'cool', stay: false })
    expect(store.dispatch.getCall(1).args[0])
      .to.deep.equal({ type: 'notification/hide' })
  })

  it('should handle info(msg, true)', () => {
    info('cool', true)
    clock.tick(5000)
    expect(store.dispatch.callCount).to.equal(1)
    expect(store.dispatch.getCall(0).args[0])
      .to.deep.equal({ type: 'notification/info', message: 'cool', stay: true })
  })

  it('should correctly reduce a success', () => {
    expect(reducer([], { type: 'notification/success', message: 'cool', stay: false }).hidden).to.equal(false)
  })
})
