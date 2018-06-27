import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  --size: 80px;
  --fill-radius: calc(var(--size) * 2);
  --speed: 1234ms;

  --thickness: 20px;
  --inner-circle: calc(var(--size) - var(--thickness));

  --color: #005041;
  --bg: #26a69a;
  --inner-bg: #fff;

  width: var(--size);
  height: var(--size);
  background: var(--bg);
  border-radius: 50%;
  position: relative;
  animation: ${Spin} var(--speed) linear 0s infinite normal;

  &:before,
  &:after {
    content: '';
    position: absolute;
  }

  &:before {
    /* Half Circle / Gradient Fill */
    width: 50%;
    height: var(--size);
    border-radius: 0 var(--fill-radius) var(--fill-radius) 0;
    background: linear-gradient(var(--bg) var(--thickness), var(--color));
    top: 0;
    right: 0;
    z-index: 1;
  }

  &:after {
    /* Inner Circle */
    width: var(--inner-circle);
    height: var(--inner-circle);
    background: var(--inner-bg);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const SpinningBorder = () => {
  return <Wrapper />;
};

export default SpinningBorder;
