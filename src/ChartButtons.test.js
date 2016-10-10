import React    from 'react'
import ReactDOM from 'react-dom'

import {findWithType} from 'react-shallow-testutils'
import ReactTestUtils from 'react-addons-test-utils'

import ChartButtons       from './ChartButtons'
import CandleStickButtons from './CandleStickButtons'
import ZoomButtons        from './ZoomButtons'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ChartButtons />, div)
})

it('has a ZoomButtons component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<ChartButtons />)
  findWithType(renderer.getRenderOutput(), ZoomButtons)
})

it('has a CandleStickButtons component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<ChartButtons />)
  findWithType(renderer.getRenderOutput(), CandleStickButtons)
})