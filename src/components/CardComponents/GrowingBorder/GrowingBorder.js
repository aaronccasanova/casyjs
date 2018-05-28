import React from 'react';
import styles from './GrowingBorder.css';

const GrowingBorder = () => {
  return (
    <div className={styles.GrowingBorder}>
      <h2 className={styles.mainHeading}>&#x02116; 923</h2>
      <h3 className={styles.subHeading}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
      <p className={styles.content}>
        Quia cum, corrupti assumenda autem fugiat nisi illo officia porro sint
        sunt fugit sed quas, quasi harum deserunt, suscipit consectetur
        repudiandae architecto!
      </p>
      <div>
        <p className={styles.rightArrow}>&#x021A0;</p>
      </div>
    </div>
  );
};

export default GrowingBorder;
