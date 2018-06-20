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
import GrowingLoader from './../../LoaderComponents/GrowingLoader';
import DomeSwitchButton from './../../ButtonComponents/DomeSwitchButton/DomeSwitchButton';
import NextButton from '../../ButtonComponents/NextButton/NextButton';

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
            btnColor="var(--cp-pri-color)"
            arrowColor="var(--cp-black)"
            arrowHover="white"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/DarkenButton">
          <DarkenButton
            btnColor="var(--cp-pri-color)"
            hoverColor="var(--cp-pri-hover)"
            fontColor="white"
          >
            Hello
          </DarkenButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/OutlineButton">
          <OutlineButton
            brdrColor="var(--cp-pri-color)"
            fillColor="var(--cp-off-white)"
            // fontHoverColor optional if you want a specific color on hover
            fontHoverColor="var(--cp-off-white)"
          >
            Switcheroo
          </OutlineButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/BlockButton">
          <BlockButton
            btnColor="var(--cp-pri-color)"
            hoverColor="var(--cp-pri-hover)"
            fontColor="white"
          >
            100% Contained
          </BlockButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/OutlineButtonGroup">
          <OutlineButtonGroup
            brdrColor="var(--cp-pri-color)"
            fillColor="var(--cp-off-white)"
            // fontHoverColor optional if you want a specific color on hover
            fontHoverColor="var(--cp-off-white)"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/DarkenButtonGroup">
          <DarkenButtonGroup
            btnColor="var(--cp-pri-color)"
            hoverColor="var(--cp-pri-hover)"
            fontColor="white"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/SlideArrowButton">
          <SlideArrowButton btnColor="var(--cp-pri-color)" fontColor="white">
            Move Aside
          </SlideArrowButton>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Links/AniColorLink">
          <AniColorLink
            href="http://www.casyjs.com"
            aniColor="var(--cp-pri-color)"
            fontColor="var(--cp-black)"
          >
            Campground
          </AniColorLink>
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Loaders/GrowingLoader">
          <GrowingLoader color="var(--cp-pri-color)" />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Loaders/GrowingLoader">
          <DomeSwitchButton btnSize="80px" label="+" />
          {/* <DomeSwitchButton btnSize="80px" label="–" /> */}
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/NextButton">
          <NextButton right />
          {/* <DomeSwitchButton btnSize="80px" label="–" /> */}
        </MasterCopyPasteCard>
      </MasterCopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Buttons;
