import React from 'react';
import styles from './PoppingCard.css';

const PoppingCard = () => {
  return (
    <div className={styles.PoppingCard}>
      <div className={styles.imageHalf}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1505773170783-58f82a520465?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3288093a41bb48f021aac5c157d41af&auto=format&fit=crop&w=2100&q=80"
          alt="boob"
        />
      </div>
      <div className={styles.textHalf}>
        <h2>Looky there...</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus perspiciatis quidem nesciunt hic libero incidunt vero iusto
          dolor!
        </p>
      </div>
    </div>
  );
};

export default PoppingCard;
