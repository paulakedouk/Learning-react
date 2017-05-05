var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')


var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
			div(null,
				MyTitleFactory({title: 'test 1', color: 'aquamarine'}),
				MyTitleFactory({title: 'test 2', color: 'peru'}),
				MyTitleFactory({title: 'test 3', color: 'blue'}),
				MyTitleFactory({title: 'test 4', color: 'pink'})
			)
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
