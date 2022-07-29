import React from 'react';
import foto from '../img/walletIcon.png';
import Login from '../Login/Login';
import UseForm from '../Login/UseForm';
import styles from './Header.module.css';
import { GlobalContext } from './GlobalContext';

const Header = () => {
  const produtoLocal = window.localStorage.getItem('email');
  const global = React.useContext(GlobalContext);

  if (global.total < 0) {
    setTimeout(() => {
      console.log('hahah');
      global.setTotal(0);
    }, 100);
  }

  return (
    <header>
      <div className={styles.left}>
        <img src={foto} alt="wallet icon" />
        <h2>Smart Wallet</h2>
      </div>
      <div className={styles.right}>
        <p>Total: {global.total.toFixed(2).replace('.', ',')}</p>
        <p>Currency: BRL</p>
        <span className={styles.span}>{produtoLocal}</span>
      </div>
    </header>
  );
};

export default Header;
