import React    from 'react'
import ReactDOM from 'react-dom'

import {findWithType} from 'react-shallow-testutils'
import ReactTestUtils from 'react-addons-test-utils'

import Chart        from './Chart'
import ChartButtons from './ChartButtons'
import MainChart    from './MainChart'
//import MainHeader  from './MainHeader'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainChart />, div)
})

//it('has a MainHeader component', () => {
  //const renderer = ReactTestUtils.createRenderer()
  //renderer.render(<MainChart />)
  //findWithType(renderer.getRenderOutput(), MainHeader)
//})

it('has a Chart component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<MainChart />)
  findWithType(renderer.getRenderOutput(), Chart)
})

it('has a ChartButtons component', () => {
  const renderer = ReactTestUtils.createRenderer()
  renderer.render(<MainChart />)
  findWithType(renderer.getRenderOutput(), ChartButtons)
})