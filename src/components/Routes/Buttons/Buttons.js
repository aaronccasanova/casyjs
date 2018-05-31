import React from 'react';
import styled from 'styled-components';
import CopyButton from './../../Widgets/CopyButton';
import DownButton from '../../NavigationComponents/AnchorButtons/DownButton/DownButton';
import DarkenButton from '../../ButtonComponents/DarkenButton/DarkenButton';
import OutlineButton from '../../ButtonComponents/OutlineButton/OutlineButton';
import BlockButton from '../../ButtonComponents/BlockButton/BlockButton';
import DarkenButtonGroup from '../../ButtonComponents/DarkenButtonGroup/DarkenButtonGroup';
import OutlineButtonGroup from '../../ButtonComponents/OutlineButtonGroup/OutlineButtonGroup';
import SlideArrowButton from '../../ButtonComponents/SlideArrowButton/SlideArrowButton';
import AniColorLink from './../../LinkComponents/AniColorLink';

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 20px 0;
  background: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    flex: 1 1 auto;
  }
`;

const Section = styled.section`
  background: white;
  padding: 30px;
  margin: 20px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eeeeee;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);
`;

const ComponentName = styled.h2`
  width: 90%;
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid #eee;
`;

const ComponentWrapper = styled.div`
  margin: 25px 0;
`;

const Buttons = () => {
  return (
    <Wrapper>
      <Section>
        <ComponentName>DownButton</ComponentName>
        <ComponentWrapper>
          <DownButton />
        </ComponentWrapper>
        <CopyButton id="Buttons/DownButton" />
      </Section>
      <Section>
        <ComponentName>DarkenButton</ComponentName>
        <ComponentWrapper>
          <DarkenButton>Hello</DarkenButton>
        </ComponentWrapper>`
        <CopyButton id="Buttons/DarkenButton" />
      </Section>
      <Section>
        <ComponentName>OutlineButton</ComponentName>
        <ComponentWrapper>
          <OutlineButton>Switcheroo</OutlineButton>
        </ComponentWrapper>
        <CopyButton id="Buttons/OutlineButton" />
      </Section>
      <Section>
        <ComponentName>BlockButton</ComponentName>
        <ComponentWrapper>
          <BlockButton>100% Contained</BlockButton>
        </ComponentWrapper>
        <CopyButton id="Buttons/BlockButton" />
      </Section>
      <Section>
        <ComponentName>OutlineButtonGroup</ComponentName>
        <ComponentWrapper>
          <OutlineButtonGroup />
        </ComponentWrapper>
        <CopyButton id="Buttons/OutlineButtonGroup" />
      </Section>
      <Section>
        <ComponentName>DarkenButtonGroup</ComponentName>
        <ComponentWrapper>
          <DarkenButtonGroup />
        </ComponentWrapper>
        <CopyButton id="Buttons/DarkenButtonGroup" />
      </Section>
      <Section>
        <ComponentName>SlideArrowButton</ComponentName>
        <ComponentWrapper>
          <SlideArrowButton>Move Aside</SlideArrowButton>
        </ComponentWrapper>
        <CopyButton id="Buttons/SlideArrowButton" />
      </Section>
      <Section>
        <ComponentName>AniColorLink</ComponentName>
        <ComponentWrapper>
          <AniColorLink href="#">Campground</AniColorLink>
        </ComponentWrapper>
        <CopyButton id="Links/AniColorLink" />
      </Section>
    </Wrapper>
  );
};

export default Buttons;
