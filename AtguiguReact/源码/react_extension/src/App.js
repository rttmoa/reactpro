import React, { Component,Fragment } from 'react'
import Demo from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
	render() {
		return (
			// <Fragment /> 相当于空标签 <></>
			<Fragment>
				<Demo/>
			</Fragment>
		)
	}
}
