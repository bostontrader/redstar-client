import React, { Component } from 'react'
import CandleStickButtons   from './CandleStickButtons.js'
import ZoomButtons          from './ZoomButtons.js'

class ChartButtons extends Component {
  render() {
    return (
      <div className="ChartButtons">
        <p>These are the ChartButtons</p>
        <ZoomButtons></ZoomButtons>
        <CandleStickButtons></CandleStickButtons>
      </div>
    )
  }
}

export default ChartButtons
