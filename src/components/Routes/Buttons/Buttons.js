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
import GrowingLoader from '../../LoaderComponents/GrowingLoader/GrowingLoader';
import DomeSwitchButton from './../../ButtonComponents/DomeSwitchButton/DomeSwitchButton';
import NextButton from '../../ButtonComponents/NextButton/NextButton';
import ThumbnailSlider from '../../ButtonComponents/ThumbnailSlider/ThumbnailSlider';
import CircleSlider from '../../ButtonComponents/CircleSlider/CircleSlider';
import SpinningBorder from '../../LoaderComponents/SpinningBorder/SpinningBorder';

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
          <NextButton left size="75px" color="lightsteelblue" />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/NextButton">
          <ThumbnailSlider
            height="400px"
            width="100%"
            images={[
              'https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg',
              'https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg',
              'https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg',
              'https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg',
              'https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg'
            ]}
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/NextButton">
          <CircleSlider
            size="70vw"
            speed="600ms"
            heading1="Copy"
            heading2="Paste"
            heading3="Create"
            heading4="CPC"
            color1="#76B8B8"
            color2="#459393"
            color3="#76B8B8"
            color4="#459393"
            centerCircleColor="#176C6C"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Buttons/NextButton">
          <SpinningBorder
            priColor="#26a69a"
            secColor="#005041"
            innerColor="#fff"
            speed="876ms"
            size="85px"
            thickness="20px"
          />
        </MasterCopyPasteCard>
      </MasterCopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Buttons;
