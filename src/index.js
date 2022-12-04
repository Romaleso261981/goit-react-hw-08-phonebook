import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { Paper } from '@mui/material';

const basename =
  process.env.NODE_ENV !== 'production'
    ? '/goit-react-hw-08-phonebook'
    : '/goit-react-hw-08-phonebook/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={basename}>
          <Paper
            style={{
              Width: '100wv',
              Height: '500px',
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundSize: 'cover',
            }}
          >
            <App />
          </Paper>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
