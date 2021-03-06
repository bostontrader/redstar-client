import React    from 'react'
import ReactDOM from 'react-dom'

import {findWithType} from 'react-shallow-testutils'
import ReactTestUtils from 'react-addons-test-utils'

import Main       from './Main'
import MainChart  from './MainChart'
import MainHeader from './MainHeader'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Main />, div)
})

it('has a MainHeader component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<Main />)
  findWithType(renderer.getRenderOutput(), MainHeader)
})

it('has a MainChart component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<Main />)
  findWithType(renderer.getRenderOutput(), MainChart)
})