import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  min-height: 100vh;
  display: grid;
  grid-template-columns:
    minmax(100px, auto)
    auto
    auto
    minmax(100px, auto);
  /* grid-template-columns:
    calc(120px + (200 - 120) * (100vw - 900px) / (1400 - 900))
    auto
    auto
    calc(120px + (200 - 120) * (100vw - 900px) / (1400 - 900)); */
  grid-template-rows:
    minmax(40px, auto)
    auto
    minmax(40px, auto);

  @media (max-width: 900px) {
    grid-template-columns:
      calc(40px + (120 - 40) * (100vw - 320px) / (900 - 320))
      auto
      calc(40px + (120 - 40) * (100vw - 320px) / (900 - 320));
    grid-template-rows:
      minmax(95px, auto)
      auto
      auto
      minmax(95px, auto);
  }
`;

const TopText = styled.h3`
  margin-bottom: 50px;
  font-weight: bold;
  letter-spacing: 5px;
  color: #565656;
`;

const SideText = TopText.extend`
  margin: 0;
  position: absolute;
  top: 31%;
  left: 0;
  transform: rotate(90deg);
`;

const CircleLogo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  color: white;
  font-size: 16px;
  line-height: 50px;
  letter-spacing: 8px;
  padding-left: 8px;
  text-align: center;
  position: absolute;
  right: 12%;
  top: 15%;
`;

const OutlineBox = styled.div`
  grid-column: 2/4;
  grid-row: 2/3;
  border: 2px solid #d4d4d4;
  display: grid;
  grid-template-columns: auto auto;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-column: 2/3;
    grid-row: 2/4;
  }
`;

const ImagesSection = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  transform: translate(
    calc(
      -25px + (-60 - -25) * (${props => props.scale} - 320px) / (1400 - 320)
    ),
    calc(15px + (0 - 15) * (${props => props.scale} - 320px) / (1400 - 320))
  );
`;

const LargeImgWrapper = styled.div`
  border: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  overflow: hidden;
  transform: rotate(-45deg);
  grid-column: 1/2;
  grid-row: 1/2;
  width: calc(
    220px + (580 - 220) * (${props => props.scale} - 320px) / (1400 - 320)
  );
  height: calc(
    220px + (580 - 220) * (${props => props.scale} - 320px) / (1400 - 320)
  );
  align-self: center;
  justify-self: center;

  img {
    width: 150%;
    height: 150%;
    object-fit: cover;
    transform: rotate(45deg) translate(-25%, -10%);
  }

  @media (max-width: 900px) {
    width: calc(
      163px + (450 - 163) * (${props => props.scale} - 320px) / (900 - 320)
    );
    height: calc(
      163px + (450 - 163) * (${props => props.scale} - 320px) / (900 - 320)
    );
  }
`;

const SmallImgWrapper = styled.div`
  background: #dada00;
  border-top: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  border-left: calc(
      10px + (100 - 10) * (${props => props.scale} - 320px) / (2500 - 320)
    )
    solid white;
  width: 50%;
  height: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;

  img {
    transform: rotate(45deg) translate(-24%, -7%);
    width: 150%;
    height: 150%;
    object-fit: cover;
  }
`;

const ContentBox = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  align-self: center;
  justify-self: center;
  z-index: 1;
  white-space: nowrap;
  background: white;
  text-align: center;
  padding: 10px 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(
    calc(-50px + (-10 - -50) * (${props => props.scale} - 320px) / (1400 - 320))
  );
  font-size: calc(
    15px + (30 - 15) * (${props => props.scale} - 320px) / (1400 - 320)
  );

  @media (max-width: 900px) {
    transform: translateY(
      calc(0px + (-10 - 0) * (${props => props.scale} - 320px) / (900 - 320))
    );
    font-size: calc(
      12px + (50 - 12) * (${props => props.scale} - 320px) / (2500 - 320)
    );
  }
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: min-content;
  /* grid-template-columns: auto; */
  text-align: right;
  padding: 20px 20px 20px 0;

  p,
  h2,
  h6 {
    justify-self: end;
    align-content: center;
    padding: calc(
      10px + (30 - 10) * (${props => props.scale} - 320px) / (1400 - 320)
    );
    background: white;
    /* transform: translateX(
      calc(60px + (40 - 60) * (${props => props.scale} - 320px) / (1400 - 320))
    ); */
    transform: translateX(
      calc(80px + (30 - 80) * (${props => props.scale} - 320px) / (1400 - 320))
    );
    background: pink;
  }

  p {
    font-weight: bold;
    color: slategrey;
    font-size: calc(
      16px + (25 - 16) * (${props => props.scale} - 320px) / (1400 - 320)
    );
  }
  h2 {
    font-family: 'Libre Baskerville', serif;
    letter-spacing: calc(
      6px + (1 - 6) * (${props => props.scale} - 320px) / (1400 - 320)
    );
    font-size: calc(
      40px + (60 - 40) * (${props => props.scale} - 320px) / (1400 - 320)
    );
    font-weight: bold;
  }
  h6 {
    font-size: calc(
      10px + (15 - 10) * (${props => props.scale} - 320px) / (1400 - 320)
    );
    color: #888888;
    width: calc(200px + (400 - 200) * (100vw - 901px) / (1400 - 901));
    /* justify-self: end; */
  }

  @media (max-width: 900px) {
    /* grid-column: 1/2;
      grid-row: 2/3; */
    p {
      padding: calc(20px + (30 - 20) * (100vw - 320px) / (900 - 320)) 20px 20px
        20px;
      font-size: calc(12px + (20 - 12) * (100vw - 320px) / (900 - 320));
      margin-right: calc(0px + (50 - 0) * (100vw - 320px) / (900 - 320));
    }
    h2 {
      margin-left: calc(0px + (50 - 0) * (100vw - 320px) / (900 - 320));
      font-size: calc(25px + (70 - 25) * (100vw - 320px) / (900 - 320));
      line-height: 0.9;
      padding: 20px 20px calc(20px + (60 - 20) * (100vw - 320px) / (900 - 320))
        20px;
      text-align: left;
    }
    h6 {
      font-size: calc(12px + (20 - 12) * (100vw - 320px) / (900 - 320));
      margin-left: calc(0px + (50 - 0) * (100vw - 320px) / (900 - 320));
      width: calc(170px + (400 - 170) * (100vw - 320px) / (900 - 320));
      text-align: left;
      padding: 20px 20px calc(20px + (60 - 20) * (100vw - 320px) / (900 - 320))
        20px;
    }
  }
`;

class BoxyLanding extends Component {
  state = {
    scale: null
  };

  getScale = () => {
    let scaleWidth = window.innerWidth;
    let scaleHeight = window.innerHeight;
    let scale = scaleWidth > scaleHeight ? scaleHeight : scaleWidth;
    return `${scale}px`;
  };

  componentWillMount() {
    let scale = this.getScale();
    this.setState({
      scale
    });

    window.addEventListener('resize', () => {
      let scale = this.getScale();
      this.setState({
        scale
      });
    });
  }

  render() {
    return (
      <Wrapper>
        <OutlineBox>
          <ImagesSection scale={this.state.scale}>
            <LargeImgWrapper scale={this.state.scale}>
              <img
                src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
                alt="dog"
              />
              <SmallImgWrapper scale={this.state.scale}>
                <img
                  src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                  alt="cat"
                />
              </SmallImgWrapper>
            </LargeImgWrapper>
            <ContentBox scale={this.state.scale}>
              CREATE A SHARED RITUAL
            </ContentBox>
          </ImagesSection>
          <ContentSection scale={this.state.scale}>
            <p>
              Friday 20 April<br />AM
            </p>
            <h2>
              To Build<br />Relationships
            </h2>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatibus ut eveniet soluta ipsum quam enim libero obcaecati
              cum architecto nisi
            </h6>
          </ContentSection>
        </OutlineBox>
        {/* <TopText>We're Lost</TopText> */}
        {/* <SideText>
          Thank God<br />I Found You
        </SideText> */}
        {/* <CircleLogo>LA</CircleLogo> */}
        {/* <OutlineBox>
          <ImagesSection>
            <ImagesWrapper scale={this.state.scale}>
              <LargeImgWrapper scale={this.state.scale}>
                <img
                  src="https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92b82a18bf4bfbdfe1bd7eed8cd4ba49&auto=format&fit=crop&w=675&q=80"
                  alt="dog"
                />
                <SmallImgWrapper scale={this.state.scale}>
                  <img
                    src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80"
                    alt="cat"
                  />
                </SmallImgWrapper>
              </LargeImgWrapper>
              <ContentBox scale={this.state.scale}>
                CREATE A SHARED RITUAL
              </ContentBox>
            </ImagesWrapper>
          </ImagesSection>
          <ContentSection scale={this.state.scale}>
            <div>
              <p>
                Friday 20 April<br />AM
              </p>
              <h2>
                To Build<br />Relationships
              </h2>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                voluptatibus ut eveniet soluta ipsum quam enim libero obcaecati
                cum architecto nisi
              </h6>
            </div>
          </ContentSection>
        </OutlineBox> */}
      </Wrapper>
    );
  }
}

export default BoxyLanding;
