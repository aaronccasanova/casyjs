import React, { Component } from 'react';
import styles from './SpacedLandingPage.css';
import { vpScale } from './../../../helpers';
import styled from 'styled-components';

const SpacedLandingWrapper = styled.div`
  height: ${vpScale(100, 100, 320, 1300, 'vh-vp')};
`;

// because I couldn't use vpScale function (or any JS) inside styled components transform: translate(***)
const imageY = vpScale(100, 200, 320, 960, 'vh-px');
const imageX = vpScale(-50, -200, 320, 960, 'vw-px');

const Image = styled.img`
  --y: ${imageY}
  --x: ${imageX}
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(
    var(--x),
    var(--y)
    );
    `;

const Circle = styled.div`
  /* color: var(--circle-color); */
  color: #d6d6d6;
  border: 5px solid;
  background: transparent;
  position: absolute;
  top: ${vpScale(19, 230, 320, 960, 'vh-px')};
  left: ${vpScale(20, 260, 320, 960, 'vw-px')};
  width: ${vpScale(275, 500, 360, 960, 'vmin-px')};
  height: ${vpScale(275, 500, 360, 960, 'vmin-px')};
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
`;

const Heading = styled.h2`
  color: #d6d6d6;
  font-size: ${vpScale(27, 40, 320, 960, 'vmin-px')};
`;

const Text = styled.p`
  color: #d6d6d6;
  font-size: ${vpScale(16, 32, 320, 960, 'vmin-px')};
`;
class SpacedLandingPage extends Component {
  render() {
    return (
      <SpacedLandingWrapper className={styles.SpacedLandingPage}>
        <Image
          src="https://images.pexels.com/photos/347761/pexels-photo-347761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="moon"
        />
        <Circle>
          <div className={styles.boxOne}>
            <div className={styles.circleContent}>
              <Heading className={styles.circleHeading}>SPACED</Heading>
              <Text className={styles.circleText}>
                To space and back, safely
              </Text>
            </div>
          </div>
        </Circle>
        <div className={styles.flipText}>
          <p>1st space airline company</p>
          <p>few steps to the moon</p>
        </div>
        <div className={styles.horzText}>
          <p>1st space airline company</p>
          <p>few steps to the moon</p>
        </div>
      </SpacedLandingWrapper>
    );
  }
}

export default SpacedLandingPage;
