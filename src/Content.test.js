import React          from 'react'
import ReactDOM       from 'react-dom'

import {findWithType} from 'react-shallow-testutils'
import ReactTestUtils from 'react-addons-test-utils'

import Main    from './Main'
import Content from './Content'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Content />, div)
})

it('has a Main component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<Content />)
  findWithType(renderer.getRenderOutput(), Main)
})