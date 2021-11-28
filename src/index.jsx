import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from './context/Context';
import {VidProvider} from './context/VidContext'

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
    <VidProvider>
      <Provider>
        <App />
      </Provider>
    </VidProvider>
  </BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);