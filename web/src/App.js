import React from 'react'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './configureStore'

const store = configureStore();

export default () => (
 	<Provider store={store}>
		{routes()}
	</Provider>
)