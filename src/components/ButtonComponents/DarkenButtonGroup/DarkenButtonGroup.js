import React from 'react';
import styles from './DarkenButtonGroup.css';

const DarkenButtonGroup = () => {
  return (
    <div className={styles.darkenButtonGroup}>
      <button className={styles.button}>Laugh</button>
      <button className={styles.button}>Out</button>
      <button className={styles.button}>Loud</button>
    </div>
  );
};

export default DarkenButtonGroup;
