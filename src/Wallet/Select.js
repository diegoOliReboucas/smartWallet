import React from 'react';
import styles from './Select.module.css';

const Select = (props) => {
  return (
    <div>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <select
        required
        id={props.name}
        className={styles.select}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      >
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
