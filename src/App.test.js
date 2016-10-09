import React          from 'react'
import ReactDOM       from 'react-dom'

import ReactTestUtils from 'react-addons-test-utils'
import {findWithType} from 'react-shallow-testutils'

import Content from './Content.js'

import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('has a Content component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<App />)
  findWithType(renderer.getRenderOutput(), Content)
})