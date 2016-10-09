import React    from 'react'
import ReactDOM from 'react-dom'

import {findWithType} from 'react-shallow-testutils'
import ReactTestUtils from 'react-addons-test-utils'

import Chart from './Chart'
import Main  from './Main'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Main />, div)
})

it('has a Chart component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<Main />)
  findWithType(renderer.getRenderOutput(), Chart)
})