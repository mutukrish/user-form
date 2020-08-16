import React, {Component} from 'react'
import {mount} from 'enzyme'
import '../_config/enzymeConfig'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import Userform from './Userform'

describe('Userform', () => {
  const mockStore = configureStore()
  const initialState = {
    alert: {},
  }

  const store = mockStore(initialState)

  const wrapper = mount(
    <Provider store={store}>
      <Userform />
    </Provider>,
  )

  //console.log(wrapper.find('#username').debug())
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('it has a form', () => {
    expect(wrapper.find('Form').exists()).toBe(true)
  })

  it('it has a submit button', () => {
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('it has a all form input', () => {
    expect(wrapper.find('#username').exists()).toBe(true)
    expect(wrapper.find('#salary').exists()).toBe(true)
    expect(wrapper.find('#age').exists()).toBe(true)
  })

  it('username to match the correct value', () => {
    const userNameInput = wrapper.find("input[name='username']")
    userNameInput.simulate('change', {
      persist: () => {},
      target: {
        name: 'username',
        value: 'Test',
      },
    })
    expect(userNameInput.html()).toMatch('Test')
  })
})
