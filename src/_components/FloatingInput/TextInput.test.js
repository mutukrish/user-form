import React from 'react'
import {mount} from 'enzyme'
import '../../_config/enzymeConfig'
import TextInput from '../FloatingInput'

it('renders text input with label (default type)', () => {
  const wrapper = mount(
    <TextInput
      name="first_name"
      id="first_name"
      type="text"
      label="First Name"
    />,
  )
  const label = wrapper.find('label')
  expect(label).toHaveLength(1)
  expect(label.prop('htmlFor')).toEqual('first_name')
  expect(label.text()).toEqual('First Name')

  const input = wrapper.find('input')
  expect(input).toHaveLength(1)
  expect(input.prop('type')).toEqual('text')
  expect(input.prop('name')).toEqual('first_name')
  expect(input.prop('id')).toEqual('first_name')
})

it('renders email input with label given the type', () => {
  const wrapper = mount(
    <TextInput type="email" id="email" name="email" label="Email" />,
  )
  const label = wrapper.find('label')
  expect(label).toHaveLength(1)
  expect(label.prop('htmlFor')).toEqual('email')
  expect(label.text()).toEqual('Email')

  const input = wrapper.find('input')
  expect(input).toHaveLength(1)
  expect(input.prop('type')).toEqual('email')
  expect(input.prop('name')).toEqual('email')
  expect(input.prop('id')).toEqual('email')
})
