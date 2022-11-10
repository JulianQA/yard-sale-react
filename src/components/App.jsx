import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Account } from '../views/Account';
import { Home } from '../views/Home';
import { Login } from '../views/Login';
import { CreateAccount } from '../views/CreateAccount';
import { NotFound } from '../views/NotFound';
import { CreateNewPassword } from '../views/CreateNewPassword';
import { SendEmail } from '../views/SendEmail';
import { Header } from './Header';
import { Orders } from '../views/Orders';
import { MyOrder } from './MyOrder';
import { AppContext } from '../utils/context/AppContext';
import { useInitialState } from '../utils/hooks/useInitialState';

function App() {
  return (
    <AppContext.Provider value={useInitialState()}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new-password' element={<CreateNewPassword />} />
          <Route path='/send-email' element={<SendEmail />} />
          <Route path='/account' element={<Account />} />
          <Route path='/sign-up' element={<CreateAccount />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/order' element={<MyOrder />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  );
}

export { App };
