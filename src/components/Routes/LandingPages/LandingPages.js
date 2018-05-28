import React from 'react';
import styled from 'styled-components';
import CopyButton from './../../Widgets/CopyButton';
import ViewExampleBtn from './../../MiscComponents/ViewExampleBtn';
import LayeredText from '../../LandingPages/LayeredText/LayeredText';
import ApiccoLanding from '../../LandingPages/ApiccoLanding/ApiccoLanding';
import PokeLandingPage from './../../LandingPages/PokeLandingPage/PokeLandingPage';
import SpacedLandingPage from './../../LandingPages/SpacedLandingPage/SpacedLandingPage';
import WhiskeyLanding from './../../LandingPages/WhiskeyLanding/WhiskeyLanding';
import LifeLanding from './../../LandingPages/LifeLanding/LifeLanding';
import BoxyLanding from './../../LandingPages/BoxyLanding/BoxyLanding';
import APlayground from '../../LandingPages/APlayground/APlayground';
// import HourGlassText from '../../LandingPages/HourGlassText/HourGlassText';
// import Transitions from './Transitions/Transitions';

const LandingWrapper = styled.div`
  min-height: 100vh;
`;

const Page = styled.div`
  /* min-height: 100vh; */
  height: 100%;

  > :nth-of-type(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LandingPages = () => {
  return (
    <LandingWrapper>
      <Page>
        <APlayground />
        <CopyButton id="LandingPages/APlayground" />
        <ViewExampleBtn href="https://dribbble.com/shots/2613990-Finnerztaffen" />
      </Page>
      <Page>
        <LayeredText />
        <ViewExampleBtn href="https://www.allposters.com/-sp/Arts-et-Metiers-Graphiques-Paris-34-Posters_i14354497_.htm?UPI=F8JO010&sOrigID=106509" />
      </Page>
      <Page>
        <ApiccoLanding />
        <ViewExampleBtn href="https://appico.com/" />
      </Page>
      <Page>
        <PokeLandingPage />
        <ViewExampleBtn href="https://dribbble.com/shots/3078965-Poke-Header-Panel" />
      </Page>
      <Page>
        <SpacedLandingPage />
        <ViewExampleBtn href="https://dribbble.com/shots/4209495-SPACED" />
      </Page>
      <Page>
        <WhiskeyLanding />
        <CopyButton id="LandingPages/WhiskeyLanding" />
        <ViewExampleBtn href="https://dribbble.com/shots/4526027-Foundation-Marketplace-Product-Transition-Animation" />
      </Page>
      <Page>
        <LifeLanding />
        <CopyButton id="LandingPages/LifeLanding" />
        <ViewExampleBtn href="https://dribbble.com/shots/4495118-Conceptual-Web-UI-Concept-Product" />
      </Page>
      <Page>
        <BoxyLanding />
        <CopyButton id="LandingPages/BoxyLanding" />
        <ViewExampleBtn href="https://dribbble.com/shots/4495009-Web-Design" />
      </Page>
      {/* <HourGlassText /> */}
      {/* <Transitions /> */}
    </LandingWrapper>
  );
};

export default LandingPages;
