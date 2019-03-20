import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './tag.module.scss';

const Tag = ({ text, rightIcon, onClick }) => (
  <div className={styles.tag}>
    <span className={styles.text}>{text}</span>
    {rightIcon && (
      <FontAwesomeIcon
        onClick={() => onClick()}
        className={styles.rightIcon}
        icon="times"
      />
    )}
  </div>
);

export default Tag;
