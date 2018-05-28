import React from 'react';
import Transition from 'react-transition-group/Transition';
import styles from './RegularTransition.css';

class RegularTransition extends React.Component {
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
      <div className={styles.RegularTransition}>
        <Transition
          in={this.state.show}
          timeout={{
            enter: 2000,
            exit: 2000
          }}
          // false boolean skips entering||exiting state
          enter={false}
          exit={true}
          onEnter={node => {
            // won't log because enter={false}
            // code would normally run at the entering state
            console.log(node);
          }}
          onExit={node => {
            console.log(node);
            console.log('bye bye');
          }}
        >
          {state => (
            <div className={`${styles.square} ${styles[state]}`}>{`${
              styles.square
            } ${styles[state]}`}</div>
          )}
        </Transition>
        <div className={styles.showBtn} onClick={this.showBtn}>
          Show or Hide
        </div>
      </div>
    );
  }
}

export default RegularTransition;
