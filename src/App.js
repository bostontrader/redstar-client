import React, { Component } from 'react'

import              './App.css'
import Content from './Content.js'

/** The App component functions similarly to a "layout" as commonly seen in other frameworks.
 * That is, it's a wrapper for the Content of the page, and commonly also contains headers and footers adapted
 * for the particular app.  In our case, we don't really need a layout because our focus is on the Content itself.
 * But we keep it here because doing without it just feels wrong.
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Content></Content>
      </div>
    )
  }
}

export default App
