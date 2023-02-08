import React, { Component } from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test/index'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group"> 
							{/* <Link className="list-group-item" to="/about">About</Link> */}
							{/* <Link className="list-group-item" to="/home">Home</Link> */}
							{/* NavLInk标签相对于Link标签，多了一个选中添加css效果的能力 */}
							{/* 导航地址   */}
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">MyHome</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body"> 
								<Switch>
									<Route  path="/about" component={About}/>

									<Route  path="/home" component={Home}/>
 
									<Route  path="/test" component={Test}/>

									<Redirect to="/home" />
								</Switch>
							</div>
						</div> 
					</div> 
				</div>
			</div>
		)
	}
}
