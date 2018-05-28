import React, { Component } from 'react';

class LifeCycles extends Component {
  // 1. gets default props

  // 2. set default state
  state = {
    title: 'Life Cycles'
  };

  // 3. before render
  componentWillMount() {
    console.log('before first render');
  }

  // 4. render JSX
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <div
          onClick={() => {
            this.setState({ title: 'something else' });
          }}
        >
          Click To Change
        </div>
      </div>
    );
  }

  // 5. after JSX renders
  componentDidMount() {
    console.log('after first render');
  }

  // 6. before update
  componentWillUpdate() {
    console.log('before update render');
  }

  // 7. render method is invoked
  // 8. after update
  componentDidUpdate(prevProps, prevState) {
    console.log('after update render');
  }

  // * Analyze boolean to determine whether or not to render
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state.title) {
      return true;
    }
    return false;
  }

  // * runs when component is unmounted
  componentWillUnmount() {
    console.log('unmounted');
  }
}

export default LifeCycles;
