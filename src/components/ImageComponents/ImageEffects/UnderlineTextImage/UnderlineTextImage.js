import React from 'react';
import styles from './UnderlineTextImage.css';
import { Link } from 'react-router-dom';

const UnderlineTextImage = props => {
  return (
    <div className={styles.imageContainer}>
      <h2 className={styles.text}>{props.category.title}</h2>
      <Link to={props.category.path}>
        <img
          className={styles.image}
          src={props.category.src}
          alt={props.category.alt}
        />
      </Link>
    </div>
  );
};

export default UnderlineTextImage;
