import React from 'react';
import styles from './SlideArrowButton.css';

const SlideArrowButton = () => {
  return (
    <button className={styles.slideArrowButton}>
      <span className={styles.btnText}>Move Aside </span>
    </button>
  );
};

export default SlideArrowButton;
