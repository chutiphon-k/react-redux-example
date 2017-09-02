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
			<Switch>
				<Route exact path='/' component={() => <div>Hello</div>}/>
			</Switch>
			<Footer />
		</div>
	</Router>
)