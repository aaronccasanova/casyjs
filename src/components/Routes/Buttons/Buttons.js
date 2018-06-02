import React from 'react';
import styled from 'styled-components';
import CopyPasteCard from './../../Widgets/CopyPasteCard';
import CopyPasteFlexGrid from './../../Widgets/CopyPasteFlexGrid';
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
`;

const Buttons = () => {
  return (
    <Wrapper>
      <CopyPasteFlexGrid>
        <CopyPasteCard cpName="DownButton" id="Buttons/DownButton">
          <DownButton />
        </CopyPasteCard>
        <CopyPasteCard cpName="DarkenButton" id="Buttons/DarkenButton">
          <DarkenButton>Hello</DarkenButton>
        </CopyPasteCard>
        <CopyPasteCard cpName="OutlineButton" id="Buttons/OutlineButton">
          <OutlineButton>Switcheroo</OutlineButton>
        </CopyPasteCard>
        <CopyPasteCard cpName="BlockButton" id="Buttons/BlockButton">
          <BlockButton>100% Contained</BlockButton>
        </CopyPasteCard>
        <CopyPasteCard
          cpName="OutlineButtonGroup"
          id="Buttons/OutlineButtonGroup"
        >
          <OutlineButtonGroup />
        </CopyPasteCard>
        <CopyPasteCard
          cpName="DarkenButtonGroup"
          id="Buttons/DarkenButtonGroup"
        >
          <DarkenButtonGroup />
        </CopyPasteCard>
        <CopyPasteCard cpName="SlideArrowButton" id="Buttons/SlideArrowButton">
          <SlideArrowButton>Move Aside</SlideArrowButton>
        </CopyPasteCard>
        <CopyPasteCard cpName="AniColorLink" id="Links/AniColorLink">
          <AniColorLink href="http://www.casyjs.com">Campground</AniColorLink>
        </CopyPasteCard>
      </CopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Buttons;
