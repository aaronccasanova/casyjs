import React from 'react';
import UnderlineTextImage from '../../ImageEffects/UnderlineTextImage/UnderlineTextImage';
import styles from './HalvingGallery.css';

const categories = [
  {
    title: 'Landing Pages',
    src:
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95e28710eb1a8fa0b8ae169dfe8b1367&auto=format&fit=crop&w=1950&q=80',
    alt: 'Navbars Section',
    path: '/landing-pages'
  },
  {
    title: 'Buttons',
    src:
      'https://images.unsplash.com/photo-1506604900144-7360175909e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d437158dff03180ed32cc39401b3a894&auto=format&fit=crop&w=2110&q=80',
    alt: 'Images Section',
    path: '/buttons'
  },
  {
    title: 'Cards',
    src:
      'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c2d910abcc9bb04fcb180f6a45e407&auto=format&fit=crop&w=1991&q=80',
    alt: 'Buttons Section',
    path: '/cards'
  },
  {
    title: 'Navigation',
    src:
      'https://images.unsplash.com/photo-1520257119747-9591a2d38189?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89acb684d21ffbb4b1224d1034a262e8&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section',
    path: '/navigation'
  },
  {
    title: 'Home',
    src:
      'https://images.unsplash.com/photo-1468536029150-d16666b345a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76cbe28a65bee152cb0d6fb2898cfb4f&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section',
    path: '/'
  }
];

const HalvingGallery = () => {
  return (
    <div className={styles.HalvingGallery}>
      <div className={styles.imageContainer}>
        {categories.map(category => {
          return (
            <div key={category.title} className={styles.imageItem}>
              <UnderlineTextImage category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HalvingGallery;
