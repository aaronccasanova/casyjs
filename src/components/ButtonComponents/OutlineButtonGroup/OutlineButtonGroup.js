import React from 'react';
import styles from './OutlineButtonGroup.css';

const OutlineButtonGroup = () => {
  return (
    <div className={styles.outlineButtonGroup}>
      <button className={styles.button}>Go</button>
      <button className={styles.button}>For</button>
      <button className={styles.button}>It</button>
    </div>
  );
};

export default OutlineButtonGroup;
