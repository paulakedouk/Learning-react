import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
  render () {
    let utilSpace
    if (this.props.ShowSearch) {
      utilSpace = <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='tex' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  handleSearchTermChange: func,
  ShowSearch: bool,
  searchTerm: string
}

export default Header
