import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './CSSTransitionEx.css';

class CSSTransitionEx extends Component {
  state = {
    show: true
  };

  showBtn = () => {
    this.setState({
      show: !this.state.show ? true : false
    });
  };

  render() {
    return (
      <div className={styles.CSSTransition}>
        <CSSTransition
          in={this.state.show}
          timeout={400}
          classNames={{
            enter: styles.squareEnter,
            enterActive: styles.squareEnterActive,
            enterDone: styles.squareEnterDone,
            exit: styles.squareExit,
            exitActive: styles.squareExitActive,
            exitDone: styles.squareExitDone
          }}
        >
          <div className={styles.square}>hello</div>
        </CSSTransition>
        <div className={styles.showBtn} onClick={this.showBtn}>
          Show or Hide
        </div>
      </div>
    );
  }
}

export default CSSTransitionEx;
