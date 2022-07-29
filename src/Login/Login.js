import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from './UseForm';
import Input from './Input';
import styles from './Login.module.css';
import foto from '../img/walletIcon.png';
import Header from '../Wallet/Header';

const Login = () => {
  const email = useForm('email');
  const emailH = Header('');
  const password = useForm('password');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email.validate() && password.validate()) {
      console.log('Fez o Login');
      window.localStorage.setItem('email', email.value);
      navigate('/wallet');
    } else {
      console.log('Login nao realizado');
    }
  }

  return (
    <main>
      <div className={styles.imgArea}>
        <img src={foto} alt={foto} />
      </div>
      <div className={styles.inputArea}>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            {...email}
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            {...password}
          />
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
