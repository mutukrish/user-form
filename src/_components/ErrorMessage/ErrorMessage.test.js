import React from 'react'
import {mount} from 'enzyme'
import '../../_config/enzymeConfig'
import ErrorMessage from '../ErrorMessage'

describe('<ErrorMessage />', () => {
  it('should render', () => {
    const wrapper = mount(<ErrorMessage />)

    expect(wrapper).toBeDefined()
  })

  it('should render text', () => {
    const wrapper = mount(<ErrorMessage text="error" />)
    const paragraph = wrapper.find('p')
    expect(paragraph.text()).toEqual('error')
  })
})
