import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/AppContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // App is a children of AppContext
  <AppContextProvider>
    <App />
  </AppContextProvider>



);
