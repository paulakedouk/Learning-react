import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
	render: function () {
		return ( 
			<div>
				<MyTitle title='test 1' color='rebeccapurple' />
				<MyTitle title='test 2' color='mediumaquamarine' />
				<MyTitle title='test 3' color='peru' />
			</div>
		)
}
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))