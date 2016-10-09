import React, { Component } from 'react'

import           './Content.css'
import Main from './Main.js'
import Side from './Side.js'

/** The party really gets started here. This is the container for the charts and other related items and controls.
 * Content is broken into two major divisions of:
 * 1. Main. Where the most important charts and controls go.
 * 2. Side. Where auxiliary goodies go.
 * */
class Content extends Component {
  render() {
    return (
      <div className="Content">
        <p>This is the Content</p>
        <Main></Main>
        <Side></Side>
      </div>
    )
  }
}

export default Content
