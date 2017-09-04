import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import { Counter, CounterRedux, Home, Pokemon } from './containers'

export default () => (
	<Router>
		<div>
			<Header />
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route  path='/counter' component={Counter} />
					<Route  path='/counter-redux' component={CounterRedux} />
					<Route  path='/pokemon' component={Pokemon} />
				</Switch>
			</main>
			<Footer />
		</div>
	</Router>
)