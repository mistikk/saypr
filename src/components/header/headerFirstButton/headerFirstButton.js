import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../header.module.scss';

const HeaderFirstButtonView = () => (
  <div className={styles.headerFirstButton}>
    <FontAwesomeIcon icon="chevron-circle-left" className={styles.backIcon} />
  </div>
);

export default HeaderFirstButtonView;
