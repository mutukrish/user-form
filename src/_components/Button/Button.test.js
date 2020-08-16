import React from 'react'
import {shallow} from 'enzyme'
import '../../_config/enzymeConfig'
import Button from '../Button'

describe('<Button />', () => {
  const baseProps = {
    onClick: jest.fn(),
  }

  it('should render', () => {
    const wrapper = shallow(<Button {...baseProps} />)

    expect(wrapper).toBeDefined()
  })

  it('should call onClick', () => {
    const wrapper = shallow(<Button {...baseProps} />)
    wrapper.simulate('click')

    expect(baseProps.onClick).toHaveBeenCalled()
  })

  it('should be disableable', () => {
    const wrapper = shallow(<Button disabled {...baseProps} />)

    expect(wrapper.prop('disabled')).toBe(true)
  })

  it('should have custom type', () => {
    const props = {
      ...baseProps,
      type: 'reset',
    }
    const wrapper = shallow(<Button {...props} />)

    expect(wrapper.prop('type')).toBe(props.type)
  })

  it('should allow custom className', () => {
    const props = {
      ...baseProps,
      className: 'Custom',
    }
    const wrapper = shallow(<Button {...props} />)

    expect(wrapper.hasClass(props.className)).toBe(true)
  })
})
