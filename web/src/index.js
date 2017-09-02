import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', async () => {
	  const NextApp = (await import('./App')).default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    )
  })
}

registerServiceWorker();