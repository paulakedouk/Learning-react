import React from 'react'
// The react-dom package exports a render function
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
          <Match pattern='/details/:id' component={Details} />
        </div>
      </BrowserRouter>
    )
  }
})

// Gets transpiled to. This is just getting compiled to react.createElement
render(<App />, document.getElementById('app'))
