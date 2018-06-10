import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --img-height: 200px;
  --trans-speed: 700ms;
  --cubic-curve: cubic-bezier(0.46, 0.15, 0, 1.03);
  --bottom-left-dist: 25px;
  --underline-gap: 10px;
  --underline-size: 4px;
  /* -------------------------------- */
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  /*
  note: display: block & vertical-align: middle||bottom
  Overide images default inline
  (gets rid of visible 2px background color of container);
  
  vertical-align: middle;
  display: block; // not using block in case I want to use flexbox
  */
  vertical-align: middle;
  object-fit: cover;
  width: 100%;
  height: var(--img-height);
  transition: transform var(--trans-speed) var(--cubic-curve);

  ${Wrapper}:hover & {
    transform: scale(1.03);
  }
`;

const Title = styled.h2`
  position: absolute;
  bottom: var(--bottom-left-dist);
  left: calc(10px + (20 - 10) * (100vw - 320px) / (750 - 320));
  padding-bottom: var(--underline-gap);
  z-index: 1;
  color: snow;
  font-size: calc(14px + (18 - 14) * (100vw - 320px) / (750 - 320));

  &::before {
    content: '';
    background: snow;
    position: absolute;
    top: 100%;
    transform: translateY(-50%);
    width: 50%;
    height: var(--underline-size);
    transition: width var(--trans-speed) var(--cubic-curve);

    ${Wrapper}:hover & {
      width: 100%;
    }
  }
`;

const UnderlineTextImage = props => {
  return (
    <Wrapper>
      <Title>{props.category.title}</Title>
      <Link to={props.category.path}>
        <Image src={props.category.src} alt={props.category.alt} />
      </Link>
    </Wrapper>
  );
};

export default UnderlineTextImage;
