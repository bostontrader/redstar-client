import React    from 'react'
import ReactDOM from 'react-dom'
import CandleStickButtons    from './CandleStickButtons'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CandleStickButtons />, div)
})
