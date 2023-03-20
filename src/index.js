import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { App } from 'components/App';
import { GlobalStyles } from 'components/GlobalStyles.styled';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
