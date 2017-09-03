import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

export default () => (
	<Router>
		<div>
			<Header />
			<main>
				<div className="container">
					<div>hello</div>
					<div>hello</div>
				</div>
				<Switch>
					<Route exact path='/' component={() => <div>Hello</div>}/>
				</Switch>
			</main>
			<Footer />
		</div>
	</Router>
)