import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route index element={<App/>}/>
          <Route path={'signup'} element={<SignUpForm/>}/>
          <Route path={'login'} element={<LoginForm/>}/>
      </Routes>
  </BrowserRouter>
);
