import React from 'react';
import styles from './LayeredText.css';

const LayeredText = () => {
  return (
    <div className={styles.LayeredText}>
      <div className={styles.mainContainer}>
        <h2 className={styles.backgroundText}>923</h2>
        <h3 className={styles.first}>Arts</h3>
        <h3 className={styles.second}>Graphiques</h3>
        <h3 className={styles.third}>Metiers</h3>
        <h3 className={styles.fourth}>Paris</h3>
      </div>
    </div>
  );
};

export default LayeredText;
