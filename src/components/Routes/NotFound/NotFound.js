import React from 'react';
import styles from './NotFound.css';

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <div className={styles.contentContainer}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1501511795728-df53825d742a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec63be59e881ffa2ed65339c27e4db90&auto=format&fit=crop&w=634&q=80"
          alt="NotFound"
        />
        <h1 className={styles.mainHeading}>404</h1>
        <h2 className={styles.subHeading}>Page Not Found</h2>
      </div>
    </div>
  );
};

export default NotFound;
