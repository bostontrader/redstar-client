import React      from 'react'
import ReactDOM   from 'react-dom'
import MainHeader from './MainHeader'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MainHeader />, div)
})
