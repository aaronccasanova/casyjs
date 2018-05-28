import React from 'react';
import RegularTransition from './RegularTransition/RegularTransition';
import CSSTransitionEx from './CSSTransitionEx/CSSTransitionEx';
import styles from './Transitions.css';

const Transitions = () => {
  return (
    <div className={styles.Transitions}>
      <RegularTransition />
      <CSSTransitionEx />
    </div>
  );
};

export default Transitions;
