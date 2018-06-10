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
  height: 100%;
`;

const ComponentInfoWrapper = styled.div`
  margin: 0 -5px 50px;
  position: relative;
  z-index: 99;
  border-bottom: 2px solid #e3e3e3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  transition: 250ms;
  background: rgb(244, 244, 244);
  background: linear-gradient(
    0deg,
    rgba(244, 244, 244, 1) 0%,
    rgba(255, 255, 255, 1) 65%,
    rgba(255, 255, 255, 1) 100%
  );

  ${Page}:hover & {
    border-bottom-left-radius: calc(
      30px + (85 - 30) * (100vmin - 320px) / (750 - 320)
    );
    border-bottom-right-radius: calc(
      30px + (85 - 30) * (100vmin - 320px) / (750 - 320)
    );
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.04);
  }
`;

const CopyButtonWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;

  h4 {
    flex: 1 1 100%;
    text-align: center;
    padding: 20px;
    font-size: calc(18px + (20 - 18) * (100vmin - 320px) / (750 - 320));
  }
`;

const ExampleBtnWrapper = CopyButtonWrapper.extend`
  h4 {
    padding: 20px 20px 25px;
  }
`;

const LandingPages = () => {
  return (
    <LandingWrapper>
      <Page>
        <APlayground />
        <ComponentInfoWrapper>
          <CopyButtonWrapper>
            <h4>Copy Landing Page Component Here!</h4>
            <CopyButton id="LandingPages/APlayground" />
          </CopyButtonWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://dribbble.com/shots/2613990-Finnerztaffen" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page>
      <Page>
        <LayeredText />
        <ComponentInfoWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://www.allposters.com/-sp/Arts-et-Metiers-Graphiques-Paris-34-Posters_i14354497_.htm?UPI=F8JO010&sOrigID=106509" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page>
      <Page>
        <ApiccoLanding />
        <ComponentInfoWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://appico.com/" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page>
      <Page>
        <PokeLandingPage />
        <ComponentInfoWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://dribbble.com/shots/3078965-Poke-Header-Panel" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page>
      {/* <Page>
        <SpacedLandingPage />
        <ComponentInfoWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://dribbble.com/shots/4209495-SPACED" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page> */}
      <Page>
        <WhiskeyLanding />
        <ComponentInfoWrapper>
          <CopyButtonWrapper>
            <h4>Copy Landing Page Component Here!</h4>
            <CopyButton id="LandingPages/WhiskeyLanding" />
          </CopyButtonWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://dribbble.com/shots/4526027-Foundation-Marketplace-Product-Transition-Animation" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page>
      <Page>
        <LifeLanding />
        <ComponentInfoWrapper>
          <CopyButtonWrapper>
            <h4>Copy Landing Page Component Here!</h4>
            <CopyButton id="LandingPages/LifeLanding" />
          </CopyButtonWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://dribbble.com/shots/4495118-Conceptual-Web-UI-Concept-Product" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page>
      <Page>
        <BoxyLanding />
        <ComponentInfoWrapper>
          <CopyButtonWrapper>
            <h4>Copy Landing Page Component Here!</h4>
            <CopyButton id="LandingPages/BoxyLanding" />
          </CopyButtonWrapper>
          <ExampleBtnWrapper>
            <h4>See designers original work here!</h4>
            <ViewExampleBtn href="https://dribbble.com/shots/4495009-Web-Design" />
          </ExampleBtnWrapper>
        </ComponentInfoWrapper>
      </Page>
      {/* <HourGlassText /> */}
      {/* <Transitions /> */}
    </LandingWrapper>
  );
};

export default LandingPages;
