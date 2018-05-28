import React from 'react';
import styles from './ToXToggler.css';

const ToXToggler = () => {
  return (
    <div className={styles.ToXToggler}>
      <div className={styles.wrapper}>
        <div className={`${styles.menu} ${styles.toX}`} />
      </div>
    </div>
  );
};

export default ToXToggler;
