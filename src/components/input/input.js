import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './input.module.scss';

const Input = ({
  placeHolder,
  rounded,
  rightIcon,
  handleRightButtonOnClick,
  lengthText,
  ...otherProps
}) => (
  <div className={styles.inputWrapper}>
    <input
      className={rounded ? styles.inputRounded : styles.input}
      placeholder={placeHolder}
      {...otherProps}
    />
    {rightIcon && (
      <FontAwesomeIcon
        onClick={() => handleRightButtonOnClick()}
        className={styles.rightIcon}
        icon="plus"
      />
    )}
    {lengthText && (
      <span className={styles.lengthText}>
        {`${otherProps.value.length}/75`}
      </span>
    )}
  </div>
);

export default Input;
