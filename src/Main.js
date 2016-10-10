import React, { Component } from 'react'

import                 './Main.css'
import MainChart from  './MainChart.js'
import MainHeader from './MainHeader.js'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <p>This is the Main Content area</p>
        <MainHeader></MainHeader>
        <MainChart></MainChart>
      </div>
    )
  }
}

export default Main
