import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './state/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/logged' element={<App />} />
          <Route path='/' element={<Login />} />
        </Routes>
       </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
