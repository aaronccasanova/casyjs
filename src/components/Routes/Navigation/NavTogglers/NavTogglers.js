import React from 'react';
import styles from './NavTogglers.css';
import FlattenToggler from '../../../NavigationComponents/NavTogglers/FlattenToggler/FlattenToggler';
import ToXToggler from '../../../NavigationComponents/NavTogglers/ToXToggler/ToXToggler';

const NavTogglers = () => {
  return (
    <div className={styles.togglers}>
      <h2>NavTogglers</h2>
      <FlattenToggler />
      <ToXToggler />
    </div>
  );
};

export default NavTogglers;
