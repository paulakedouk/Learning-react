import React from 'react'
// The react-dom package exports a render function
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

console.log(Details)

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match pattern='/search' component={(props) => <Search shows={preload.shows} {...props} />} />
            <Match
              pattern='/details/:id'
              component={(props) => {
                const show = preload.shows.filter((show) => props.params.id === show.imdbID)
                return <Details show={show[0]} {...props} />
              }}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

// Gets transpiled to. This is just getting compiled to react.createElement
render(<App />, document.getElementById('app'))
