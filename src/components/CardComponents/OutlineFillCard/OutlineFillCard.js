import React from 'react';
import styles from './OutlineFillCard.css';

const OutlineFillCard = () => {
  return (
    <div className={styles.outlineFillCard}>
      <i className={styles.icon}>⪘</i>
      <h3 className={styles.subHeading}>YOU DO</h3>
      <div className={styles.hr} />
      <h2 className={styles.mainHeading}>THE MATH</h2>
      <h2 className={`${styles.mainHeading} ${styles.fill}`}>THE MATH</h2>
    </div>
  );
};

export default OutlineFillCard;
