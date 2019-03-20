import React from 'react';

import styles from './textarea.module.scss';

const TextArea = ({ placeHolder, lengthText, ...otherProps }) => (
  <div className={styles.textAreaWrapper}>
    <textarea rows="8" className={styles.textArea} placeholder={placeHolder} {...otherProps} />
    <span className={styles.lengthText}>
      {`${otherProps.value.length}/500`}
    </span>
  </div>
);

export default TextArea;
