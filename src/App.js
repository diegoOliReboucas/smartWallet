import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Wallet from './Wallet/Wallet';
import './App.css';
import { GlobalStorage } from '../src/Wallet/GlobalContext';

function App() {
  return (
    <div>
      <GlobalStorage>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </BrowserRouter>
      </GlobalStorage>
    </div>
  );
}

export default App;
