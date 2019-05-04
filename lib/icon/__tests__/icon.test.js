import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('icon', () => {
  it('render', () => {
    const json = renderer.create(<Icon name="webpack" className="x" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name="webpack" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})
