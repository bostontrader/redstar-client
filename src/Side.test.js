import React    from 'react'
import ReactDOM from 'react-dom'
import Side     from './Side'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Side />, div)
})
