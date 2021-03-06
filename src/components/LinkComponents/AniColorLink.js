import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  /* ---- CSS Variables Section ----- */
  --ani-color: ${props => (props.aniColor ? props.aniColor : '#bfdbff')};
  --font-color: ${props => (props.fontColor ? props.fontColor : '#3b3c36')};
  /* -------------------------------- */
  text-decoration: none;
  color: var(--font-color);
  font-size: 20px;
  padding-right: 15px;
  font-weight: normal;
  cursor: pointer;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    background: var(--ani-color);
    position: absolute;
    top: 55%;
    left: 0;
    width: 100%;
    height: 15px;
    transform: scaleX(0);
    transform-origin: 0;
    transition: transform 700ms cubic-bezier(0.78, -0.03, 0, 1.05);
    z-index: -1;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const AniColorLink = props => {
  return (
    <A href={props.href} aniColor={props.aniColor} fontColor={props.fontColor}>
      {props.children}
    </A>
  );
};

export default AniColorLink;
