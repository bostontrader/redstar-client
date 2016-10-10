import React, { Component } from 'react'

import Chart from './Chart.js'
import            './Main.css'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <p>This is the MainHeader</p>
        <Chart></Chart>
      </div>
    )
  }
}

export default Main
