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
          <DownButton
            btnColor="var(--pri-color)"
            arrowColor="var(--black)"
            arrowHover="white"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/DarkenButton">
          <DarkenButton
            btnColor="var(--pri-color)"
            hoverColor="var(--pri-hover)"
            fontColor="white"
          >
            Hello
          </DarkenButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/OutlineButton">
          <OutlineButton
            brdrColor="var(--pri-color)"
            fillColor="var(--pri-off-white)"
            // fontHoverColor optional if you want a specific color on hover
            fontHoverColor="var(--pri-off-white)"
          >
            Switcheroo
          </OutlineButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/BlockButton">
          <BlockButton
            btnColor="var(--pri-color)"
            hoverColor="var(--pri-hover)"
            fontColor="white"
          >
            100% Contained
          </BlockButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/OutlineButtonGroup">
          <OutlineButtonGroup
            brdrColor="var(--pri-color)"
            fillColor="var(--pri-off-white)"
            // fontHoverColor optional if you want a specific color on hover
            fontHoverColor="var(--pri-off-white)"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/DarkenButtonGroup">
          <DarkenButtonGroup
            btnColor="var(--pri-color)"
            hoverColor="var(--pri-hover)"
            fontColor="white"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/SlideArrowButton">
          <SlideArrowButton btnColor="var(--pri-color)" fontColor="white">
            Move Aside
          </SlideArrowButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Links/AniColorLink">
          <AniColorLink
            href="http://www.casyjs.com"
            aniColor="var(--pri-color)"
            fontColor="var(--black)"
          >
            Campground
          </AniColorLink>
        </MasterCopyPasteCard>
      </MasterCopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Buttons;
