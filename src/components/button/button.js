import React from 'react';

import styles from './button.module.scss';

const Button = ({ text, active, onClick }) => (
  <div className={styles.buttonWrapper}>
    <button
      type="button"
      onClick={() => onClick()}
      className={styles.button}
      style={
        active
          ? { backgroundColor: 'yellow', color: 'black', cursor: 'pointer' }
          : {}
      }
      disabled={!active}
    >
      {text}
    </button>
  </div>
);

export default Button;
