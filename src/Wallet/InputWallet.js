import React from 'react';
import styles from './InputWallet.module.css';

const InputWallet = (props) => {
  return (
    <div>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        required
        className={styles.input}
        type={props.type}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputWallet;
