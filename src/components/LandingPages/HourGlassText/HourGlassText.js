import React from 'react';
import styles from './HourGlassText.css';

const HourGlassText = () => {
  return (
    <div className={styles.HourGlassText}>
      <div className={styles.four}>Live and</div>
      <div className={styles.three}>Live and</div>
      <div className={styles.two}>Live and</div>
      <div className={styles.one}>Live and</div>
      <img
        src="http://www.clker.com/cliparts/3/4/3/d/11970950352040998729johnny_automatic_fronds_silhouette.svg.hi.png"
        alt=""
        className={styles.image}
      />
      <div className={styles.one}>let Live</div>
      <div className={styles.two}>let Live</div>
      <div className={styles.three}>let Live</div>
      <div className={styles.four}>let Live</div>
      <div className={styles.casanova}>
        <h3>Aaron Casanova</h3>
      </div>
    </div>
  );
};

export default HourGlassText;
