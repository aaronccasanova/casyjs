import React from 'react';
import styled from 'styled-components';
import HalvingGallery from '../ImageComponents/ImageGalleries/HalvingGallery/HalvingGallery';

const VideoWrapper = styled.div`
  width: 100%;
  min-height: 65vh;
  padding: 0 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
`;

const VideoHeading = styled.h2`
  border: 2px solid #ccc;
  background: #fbfbfb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  flex: 1 1 100%;
  padding: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: bold;
  font-size: calc(23px + (35 - 23) * (100vmin - 320px) / (750 - 320));

  span {
    font-size: calc(15px + (20 - 15) * (100vmin - 320px) / (750 - 320));
  }
`;

const HowToVideo = styled.iframe`
  border: 2px solid #ccc;
  background: #fbfbfb;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  flex: 1 1 100%;

  margin: 20px 0;
  width: 100%;
  height: calc(300px + (500 - 300) * (100vmin - 320px) / (750 - 320));
`;

const Home = () => {
  return (
    <div>
      <HalvingGallery />
      <VideoWrapper>
        <VideoHeading>
          Using &#x26; Sharing<br />
          Components<br />
          <span>Just got a whole lot easier!</span>
        </VideoHeading>
        <HowToVideo
          title="How To Use CPComponents"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hzYHEdCgG94?rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </VideoWrapper>
      <VideoWrapper>
        <VideoHeading>
          Any Screen Size<br />
          <span>All in one file!</span>
        </VideoHeading>
        <HowToVideo
          title="Responsive CPComponents"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RUDoyGx5gbQ?rel=0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </VideoWrapper>
    </div>
  );
};

export default Home;
