import React from 'react';
import styles from './Cards.css';
import GrowingBorder from '../../CardComponents/GrowingBorder/GrowingBorder';
import PoppingCard from '../../CardComponents/PoppingCard/PoppingCard';
import OutlineFillCard from '../../CardComponents/OutlineFillCard/OutlineFillCard';

const Cards = () => {
  return (
    <div className={styles.Cards}>
      <div className={styles.PoppingCard}>
        <PoppingCard />
        <PoppingCard />
      </div>
      <div className={styles.GrowingBorder}>
        <GrowingBorder />
      </div>
      <div className={styles.PoppingCard}>
        <OutlineFillCard />
        <OutlineFillCard />
        <OutlineFillCard />
      </div>
    </div>
  );
};

export default Cards;
