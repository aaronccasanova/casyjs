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
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const Section = styled.section`
  background: white;
  padding: 30px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #eeeeee;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);
`;

const ComponentName = styled.h2`
  width: 90%;
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
`;

const Buttons = () => {
  return (
    <Wrapper>
      <Section>
        <ComponentName>DownButton</ComponentName>
        <DownButton />
      </Section>
      <Section>
        <ComponentName>DarkenButton</ComponentName>
        <DarkenButton />
      </Section>
      <Section>
        <ComponentName>OutlineButton</ComponentName>
        <OutlineButton />
      </Section>
      <Section>
        <ComponentName>BlockButton</ComponentName>
        <BlockButton />
      </Section>
      <Section>
        <ComponentName>OutlineButtonGroup</ComponentName>
        <OutlineButtonGroup />
      </Section>
      <Section>
        <ComponentName>DarkenButtonGroup</ComponentName>
        <DarkenButtonGroup />
      </Section>
      <Section>
        <ComponentName>SlideArrowButton</ComponentName>
        <SlideArrowButton />
      </Section>
      <Section>
        <ComponentName>AniColorLink</ComponentName>
        <AniColorLink href="#">Campground</AniColorLink>
        <CopyButton id="Links/AniColorLink" />
      </Section>
    </Wrapper>
  );
};

export default Buttons;
