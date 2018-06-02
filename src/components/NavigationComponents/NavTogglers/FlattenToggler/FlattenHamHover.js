import React, { Component } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --menu-width: ${props => (props.width ? props.width : '50px')};
  --menu-height: ${props => (props.width ? props.height : '30px')};
  --bar-thickness: ${props => (props.thickness ? props.thickness : '4px')};
  --trans-speed: 150ms;
  /* -------------------------------- */
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const SubWrapper = styled.div`
  width: var(--menu-width);
  height: var(--menu-height);
  position: relative;
`;

const Menu = styled.div`
  background: black;
  position: absolute;
  width: 100%;
  height: var(--bar-thickness);
  top: 50%;
  transform: translateY(-50%);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    transition: top var(--trans-speed) ease-in;
  }

  &::before {
    top: calc((var(--menu-height) / 2 - (var(--bar-thickness) / 2)) * -1);
  }

  &::after {
    top: calc(var(--menu-height) / 2 - (var(--bar-thickness) / 2));
  }

  ${MainWrapper}:hover &::before,
  ${MainWrapper}:hover &::after {
    top: 0;
  }
`;

class FlattenHamHover extends Component {
  state = {
    toggleActive: false
  };

  toggleButton = () => {
    this.setState({
      toggleActive: !this.state.toggleActive
    });
  };

  render() {
    return (
      <MainWrapper
        onMouseEnter={this.toggleButton}
        onMouseLeave={this.toggleButton}
        width={this.props.width}
        height={this.props.height}
        thickness={this.props.thickness}
      >
        <SubWrapper>
          <Menu />
        </SubWrapper>
      </MainWrapper>
    );
  }
}

export default FlattenHamHover;
