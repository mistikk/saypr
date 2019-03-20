import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../header.module.scss';

const HeaderButtonView = ({ text, activeTab, completedTab }) => (
  <div
    className={styles.headerButton}
    style={
      activeTab ? { color: 'white' } : completedTab ? { color: 'yellow' } : {}
    }
  >
    {completedTab ? (
      <FontAwesomeIcon icon="check-circle" />
    ) : (
      <FontAwesomeIcon icon={['far', 'question-circle']} />
    )}
    <span>{text}</span>
  </div>
);

export default HeaderButtonView;
