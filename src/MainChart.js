import React, { Component } from 'react'

import Chart from        './Chart.js'
import ChartButtons from './ChartButtons.js'
//import                   './MainChart.css'

class MainChart extends Component {
  render() {
    return (
      <div className="MainChart">
        <p>This is the MainChart</p>
        <Chart></Chart>
        <ChartButtons></ChartButtons>
      </div>
    )
  }
}

export default MainChart
