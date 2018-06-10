import React from 'react';
import styles from './PokeLandingPage.css';
import styled from 'styled-components';
import { vpScale } from './../../../helpers';

import { Link } from 'react-router-dom';

const PokeWrapper = styled.div`
  height: ${vpScale(150, 110, 320, 1300, 'vh-vp')};
`;

const BgColorContainer = styled.div`
  padding: 20px;
  height: ${vpScale(300, 720, 320, 960, 'vh-px')};
  background: rgba(255, 192, 155, 0.452);
  position: relative;
`;

const MainHeading = styled.h2`
  cursor: pointer;
  font-family: 'Abril Fatface', cursive;
  border-bottom: var(--line-thickness) solid var(--cp-black);
  margin: 0;
  position: absolute;
  font-size: calc(30px + (70 - 30) * (100vw - 320px) / (960 - 320));
  top: ${vpScale(20, 80, 320, 960, 'vh-px')};
  left: calc(20px + (80 - 20) * (100vw - 320px) / (960 - 320));

  &::after {
    cursor: auto;
    content: '';
    background: var(--cp-black);
    position: absolute;
    top: 100%;
    right: -15%;
    height: var(--line-thickness);
    width: 100vw;
    transform: translateX(100%);
  }
`;

const Circle = styled.img`
  --circle-size: calc(150px + (200 - 150) * (100vw - 320px) / (960 - 320));
  position: absolute;
  top: ${vpScale(20, 85, 320, 960, 'vh-px')};
  left: calc(125px + (650 - 125) * (100vw - 320px) / (960 - 320));
  width: var(--circle-size);
  height: var(--circle-size);
  /* wanted to try scaling size by vh */
  /* transform: scale(calc(20px + (200 - 20) * (100vh - 320px) / (960 - 320))); */
`;

const Img = styled.img`
  width: calc(120px + (250 - 120) * (100vw - 320px) / (960 - 320));
  height: ${vpScale(170, 400, 320, 960, 'vh-px')};
  display: inline-block;
  object-fit: cover;
  position: absolute;
`;

const Man = Img.extend`
  top: ${vpScale(135, 300, 320, 960, 'vh-px')};
  left: calc(10px + (100 - 10) * (100vw - 320px) / (960 - 320));
  filter: brightness(130 %);
`;

const Piano = Img.extend`
  top: ${vpScale(200, 450, 320, 960, 'vh-px')};
  left: calc(160px + (400 - 160) * (100vw - 320px) / (960 - 320));
  z-index: -1;
`;

const RagLink = styled(Link)`
  --link-color: #706454;
  font-family: 'Abril Fatface', cursive;
  text-decoration: none;
  padding-bottom: 20px;
  color: var(--link-color);
  font-weight: normal;
  white-space: nowrap;
  font-size: calc(16px + (35 - 16) * (100vw - 320px) / (1360 - 320));
  position: absolute;
  top: ${vpScale(225, 560, 320, 960, 'vh-px')};
  left: calc(460px + (670 - 460) * (100vw - 600px) / (960 - 600));

  &::after {
    content: '';
    position: absolute;
    background: var(--link-color);
    width: 100%;
    height: 4px;
    top: 90%;
    left: 0;
    transform-origin: left;
    transition: all 350ms;
  }

  &:hover:after {
    transform: scaleX(0);
  }

  @media (max-width: 600px) {
    & {
      top: ${vpScale(180, 340, 360, 960, 'vh-px')};
      left: calc(160px + (265 - 160) * (100vw - 320px) / (600 - 320));
    }
    &::after {
      height: 2px;
    }
  }
`;

const PokeLandingPage = () => {
  return (
    <PokeWrapper className={styles.PokeLandingPage}>
      <BgColorContainer>
        <ul className={styles.navContainer}>
          <li>News</li>
          <li>Archive</li>
          <li>Upcoming</li>
          <li>Contact</li>
        </ul>
        <div className={styles.contentContainer}>
          <MainHeading>Poke</MainHeading>
          <Circle
            className={styles.circle}
            src="http://www.onlygfx.com/wp-content/uploads/2017/07/circle-brush-stroke-12.png"
            alt="circle"
          />
          <Man
            className={`${styles.img} ${styles.man}`}
            src="https://images.pexels.com/photos/156731/pexels-photo-156731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="record player"
          />
          <Piano
            className={`${styles.img} ${styles.piano}`}
            src="https://images.pexels.com/photos/159420/piano-instrument-music-keys-159420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="piano"
          />
          <h3>
            <RagLink to="/landing-pages">Rag Time</RagLink>
          </h3>
        </div>
      </BgColorContainer>
    </PokeWrapper>
  );
};

export default PokeLandingPage;
