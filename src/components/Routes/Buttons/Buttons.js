import React from 'react';
import styled from 'styled-components';
import MasterCopyPasteCard from './../../Widgets/MasterCopyPasteCard';
import MasterCopyPasteFlexGrid from './../../Widgets/MasterCopyPasteFlexGrid';
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
      <MasterCopyPasteFlexGrid>
        <MasterCopyPasteCard id="Buttons/DownButton">
          <DownButton />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/DarkenButton">
          <DarkenButton>Hello</DarkenButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/OutlineButton">
          <OutlineButton>Switcheroo</OutlineButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/BlockButton">
          <BlockButton>100% Contained</BlockButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/OutlineButtonGroup">
          <OutlineButtonGroup />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/DarkenButtonGroup">
          <DarkenButtonGroup />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/SlideArrowButton">
          <SlideArrowButton>Move Aside</SlideArrowButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Links/AniColorLink">
          <AniColorLink href="http://www.casyjs.com">Campground</AniColorLink>
        </MasterCopyPasteCard>
      </MasterCopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Buttons;
