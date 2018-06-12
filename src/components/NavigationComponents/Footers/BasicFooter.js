import React from 'react';
import styled from 'styled-components';
import { vpScale } from './../../../helpers';

const Wrapper = styled.footer`
  /* ---- CSS Variables Section ----- */
  --grid-brdr: ${0 ? 'red' : 'none'};
  --line-color: var(--cp-light-grey);
  --bg-color: var(--cp-off-white);
  /* -------------------------------- */
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  background: var(--bg-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  /* ------------------------------------- */
  display: grid;
  grid-template-columns:
    ${vpScale(28, 32, 320, 750, 'vw-vp')}
    [Content-start Link1-start ]
    ${vpScale(15, 11, 320, 750, 'vw-vp')}
    [Link1-end Link2-start]
    ${vpScale(15, 11, 320, 750, 'vw-vp')}
    [Link2-end Link3-start]
    ${vpScale(15, 11, 320, 750, 'vw-vp')}
    [Link3-end Email-start]
    ${vpScale(7, 11, 320, 750, 'vw-vp')}
    [Email-end Content-end]
    ${vpScale(20, 24, 320, 750, 'vw-vp')};

  grid-template-rows:
    ${vpScale(30, 9, 320, 1300, 'vh-vp')}
    [ContentLine]
    ${vpScale(52, 15, 320, 1300, 'vh-vp')};
  min-height: 100%;
  padding-bottom: 35px;
`;

const Email = styled.p`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;

  font-size: ${vpScale(12, 26, 320, 1300, 'vmin-px')};

  span {
    font-size: ${vpScale(20, 20, 320, 1300, 'vmin-px')};
    padding-right: 8px;
  }
`;

const LinkWrap = styled.div`
  justify-self: center;
  align-self: end;

  overflow: hidden;
  border: 1px solid var(--line-color);
  width: ${vpScale(30, 40, 320, 750, 'vmin-px')};
  height: ${vpScale(30, 40, 320, 750, 'vmin-px')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  background: ${props =>
    props.color === 'Instagram'
      ? `radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
      )`
      : props.color === 'Twitter'
        ? ' #1DA1F2'
        : props.color === 'Facebook'
          ? '#3B5998'
          : null};

  &:nth-of-type(1) {
    grid-column: Link1-start / Link1-end;
    grid-row: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
    margin-top: 7px;
  }
  &:nth-of-type(2) {
    grid-column: Link2-start / Link2-end;
    grid-row: 1 / 2;
    grid-row: 2 / 3;
    align-self: start;
    margin-top: 7px;
  }
  &:nth-of-type(3) {
    grid-column: Link3-start / Link3-end;
    grid-row: 2 / 3;
    align-self: start;
    margin-top: 7px;
  }

  display: flex;

  div {
    flex: 1;
    text-align: center;

    display: flex;
  }
`;

const Link = styled.a`
  flex-basis: 100%;
  text-decoration: none;

  display: flex;
  align-items: center;

  span {
    display: block;
    width: 100%;
    font-weight: bold;
    color: white;
    font-size: ${vpScale(12, 16, 320, 750, 'vmin-px')};
  }
`;

const Copyright = styled.p`
  /* ---------For Editing Layout---------- */
  border: 2px solid var(--grid-brdr);
  /* ------------------------------------- */
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;

  font-size: ${vpScale(13, 21, 320, 750, 'vmin-px')};
  transform: translateY(
    calc(20px + (30 - 20) * (100vh - 320px) / (1300 - 320))
  );
`;

const MainLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 1 / Content-end;
  grid-row: 2 / 3;
  height: 2px;
  background: var(--line-color);
`;
const HighLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: end;
  height: 115%;
  width: 2px;
  background: var(--line-color);
  transform: translateY(23%);
`;
const MidLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: end;
  height: 115%;
  width: 2px;
  background: var(--line-color);
  transform: translateY(48%);
`;
const LowLine = styled.div`
  border: 2px solid var(--grid-brdr);
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  justify-self: end;
  height: 115%;
  width: 2px;
  background: var(--line-color);
  transform: translateY(73%);
`;

const BasicFooter = () => {
  return (
    <Wrapper>
      <Email>copypastecomponents@gmail.com</Email>
      {/* <Email>mraaroncasanova@gmail.com</Email> */}
      <LinkWrap color="Instagram">
        <div>
          <Link
            href="https://instagram.com/casyjs"
            target="_blank"
            color="Instagram"
          >
            <span>I</span>
          </Link>
        </div>
      </LinkWrap>
      <LinkWrap color="Twitter">
        <div>
          <Link href="https://twitter.com/casyjs" target="_blank">
            <span>T</span>
          </Link>
        </div>
      </LinkWrap>
      <LinkWrap color="Facebook">
        <div>
          <Link href="https://facebook.com/casyjs" target="_blank">
            <span>F</span>
          </Link>
        </div>
      </LinkWrap>
      <Copyright>© 2018 Casy.js All Rights Reserved</Copyright>
      <MainLine />
      <HighLine />
      <MidLine />
      <LowLine />
    </Wrapper>
  );
};

export default BasicFooter;
