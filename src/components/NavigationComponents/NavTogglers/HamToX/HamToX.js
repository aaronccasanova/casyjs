import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './HamToX.css';

const HamToX = props => {
  return (
    <div className={styles.hamToX}>
      <div className={styles.wrapper}>
        <CSSTransition
          in={props.showDropdown}
          timeout={450}
          classNames={{
            enter: styles.xEnter,
            enterDone: styles.xEnterDone
          }}
        >
          <div className={styles.menu} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default HamToX;
