import React from 'react';
import styles from './ApiccoLanding.css';

const ApiccoLanding = () => {
  return (
    <div className={styles.ApiccoLanding}>
      <div className={styles.navContainer}>
        <h2 className={styles.logo}>apicco</h2>
        <div className={styles.hammy} />
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.subHeading}>Iris von Arnim</h4>
        <h3 className={styles.mainHeading}>Branding Commerce</h3>
        <p className={styles.link}>View Case Study</p>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.image}
          src="https://images.pexels.com/photos/425160/pexels-photo-425160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <div className={styles.shape} />
      </div>
    </div>
  );
};

export default ApiccoLanding;
