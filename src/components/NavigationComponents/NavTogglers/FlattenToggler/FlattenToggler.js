import React from 'react';
import styles from './FlattenToggler.css';

const FlattenToggler = () => {
  return (
    <div className={styles.FlattenToggler}>
      <div className={styles.wrapper}>
        <div className={`${styles.menu} ${styles.flatten}`} />
      </div>
    </div>
  );
};

export default FlattenToggler;
