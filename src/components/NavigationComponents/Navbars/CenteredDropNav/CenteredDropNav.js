import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './CenteredDropNav.css';

import HamToXToggle from '../../NavTogglers/HamToX/HamToXToggle';

class CenteredDropNav extends Component {
  state = {
    showDropdown: false,
    highBreakCounter: 0,
    lowBreakCounter: 0
  };

  toggleBtn = () => {
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  };

  hideDropdown = () => {
    this.setState({
      showDropdown: false
    });
  };

  // Recommend to also removeListener on unmount,
  // but leaving infinite for proper nav functionality
  componentWillMount() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) {
        if (this.state.highBreakCounter === 0) {
          this.setState({ lowBreakCounter: 0 });
          this.setState({ highBreakCounter: 1 });
          this.hideDropdown();
        }
      }
      if (window.innerWidth < 960) {
        if (this.state.lowBreakCounter === 0) {
          this.setState({ highBreakCounter: 0 });
          this.setState({ lowBreakCounter: 1 });
          this.hideDropdown();
        }
      }
    });

    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      // the click is inside, continue whatever your doing
      return;
    }

    // the click is outside, do something
    this.handleClickOutSide();
  };

  handleClickOutSide = () => {
    this.setState({
      showDropdown: false
    });
  };

  createLinks = () => {
    return this.props.routes.map((route, i) => {
      if (route.path) {
        return (
          <li key={i}>
            <Link
              className={styles.a}
              to={`${route.path}`}
              onClick={this.hideDropdown}
            >
              {route.name}
            </Link>
          </li>
        );
      }
      return null;
    });
  };

  render() {
    return (
      <div ref={node => (this.node = node)}>
        <div className={styles.centeredDropNav}>
          <div className={styles.navBar}>
            <div className={styles.toggleBtn} onClick={this.toggleBtn}>
              <HamToXToggle
                toggleActive={this.state.showDropdown}
                width="30px"
                height="21px"
                thickness="2px"
              />
            </div>
            <h1 className={styles.logo} onClick={this.hideDropdown}>
              <Link className={styles.logoLink} to={this.props.routes[0].path}>
                {this.props.logo}
              </Link>
            </h1>
          </div>
          <CSSTransition
            in={this.state.showDropdown}
            timeout={700}
            classNames={{
              enter: styles.dropDownEnter,
              enterActive: styles.dropDownEnterActive,
              enterDone: styles.dropDownEnterDone,
              exit: styles.dropDownExit,
              exitActive: styles.dropDownExitActive,
              exitDone: styles.dropDownExitDone
            }}
          >
            <ul className={styles.links}>{this.createLinks()}</ul>
          </CSSTransition>
        </div>
      </div>
    );
  }
}

export default CenteredDropNav;
