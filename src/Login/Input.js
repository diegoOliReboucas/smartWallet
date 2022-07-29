import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.input}
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  );
};

export default Input;
