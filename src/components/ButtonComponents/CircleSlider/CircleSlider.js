import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Slider = styled.div`
  /* ---- CSS Variables Section ----- */
  --width: 70vw;
  /* --width: 900px; */
  --height: calc(var(--width) / 2);
  /* -------------------------------- */
  overflow: hidden;
  border: 1px solid black;
  width: var(--width);
  height: var(--height);
  position: relative;
`;

const PrevNextStyles = css`
  display: block;
  position: absolute;
  top: 50%;
  padding: 10px;
  z-index: 999;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.6);
  transition: all 500ms;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: white;
  }
`;

const PrevButton = styled.button`
  ${PrevNextStyles};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 0;

  &::before {
    content: '← ';
  }
`;

const NextButton = styled.button`
  ${PrevNextStyles};
  right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &::after {
    content: ' →';
  }
`;

const Foreground = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border-radius: 50%;
  background: #dee1b6;
  width: calc(var(--width) / 3);
  height: calc(var(--width) / 3);
`;

const Wrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: -60%;
  left: -25%;
  width: calc(var(--width) * 1.5);
  height: calc(var(--width) * 1.5);
  border-radius: 50%;
  transition: transform 500ms ease-in-out;

  transform: ${props => (props.rotate ? `rotate(${props.rotate}deg)` : null)};

  display: flex;
  flex-wrap: wrap;
`;

const Box = css`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: bold;
    font-size: calc(16px + (50 - 16) * (100vw - 320px) / (1500 - 320));
    padding-top: calc(var(--width) / 2.2);
    transition: color 350ms 150ms;
  }
`;

const BoxOne = styled.div`
  ${Box};
  background: #73c8a9;
  span {
    color: ${props => (props.count === 1 ? 'white' : 'transparent')};
    transform: rotate(-45deg);
  }
`;
const BoxTwo = styled.div`
  ${Box};
  background: #bd5532;
  span {
    color: ${props => (props.count === 0 ? 'white' : 'transparent')};
    transform: rotate(45deg);
  }
`;
const BoxThree = styled.div`
  ${Box};
  background: #e1b866;
  span {
    color: ${props => (props.count === 0 ? 'white' : 'transparent')};
    transform: rotate(-135deg);
  }
`;
const BoxFour = styled.div`
  ${Box};
  background: #373b44;
  span {
    color: ${props => (props.count === 1 ? 'white' : 'transparent')};
    transform: rotate(135deg);
  }
`;

class CircleSlider extends Component {
  state = {
    rotate: 45,
    count: 1
  };

  nextRotate = () => {
    const rotate = this.state.rotate + 90;
    this.setState({
      count: this.state.count + 1,
      rotate
    });
  };

  prevRotate = () => {
    const rotate = this.state.rotate - 90;
    this.setState({
      count: this.state.count - 1,
      rotate
    });
  };

  render() {
    return (
      <Slider>
        <nav>
          <PrevButton type="button" onClick={this.prevRotate} />
          <NextButton type="button" onClick={this.nextRotate} />
        </nav>

        <Foreground />
        <Wrap rotate={this.state.rotate}>
          <BoxOne count={Math.abs(this.state.count % 2)}>
            <span>hello</span>
          </BoxOne>
          <BoxTwo count={Math.abs(this.state.count % 2)}>
            <span>hello</span>
          </BoxTwo>
          <BoxThree count={Math.abs(this.state.count % 2)}>
            <span>hello</span>
          </BoxThree>
          <BoxFour count={Math.abs(this.state.count % 2)}>
            <span>hello</span>
          </BoxFour>
        </Wrap>
      </Slider>
    );
  }
}

export default CircleSlider;
