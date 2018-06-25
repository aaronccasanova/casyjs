import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Slide = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Hidden = keyframes`
  0%, 100% {
    z-index: 2;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Slides = styled.ul`
  position: relative;
  z-index: 4;

  overflow: hidden;
  list-style: none;
  width: 70vmin;
  height: 100vmin;

  img {
    height: 100vmin;
    object-fit: cover;
    object-position: top;
  }
`;

const LargeSlide = styled.li`
  width: 70vmin;
  height: 100vmin;
  position: absolute;
  z-index: ${props => (props.slide ? '3' : '1')};
  animation: ${props => (props.slide ? `${Slide} 1s 1` : `${Hidden} 1s 1`)};
`;

const Thumbnails = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  line-height: 0;

  li {
    flex: auto;
  }
`;

const ThumbnailImg = styled.img`
  width: 30vmin;
  height: ${props => (props.height ? `${100 / props.height}vmin` : null)};
  object-fit: cover;
  object-position: top;
`;

class ThumbnailSlider extends Component {
  state = {
    slides: []
  };

  componentDidMount() {
    this.setState({
      slides: this.props.images.map(image => false)
    });
  }

  slideIn = e => {
    const target = Number(e.target.alt);
    this.setState({
      slides: this.state.slides.map((image, i) => (i === target ? true : false))
    });
  };

  render() {
    const { images } = this.props;

    return (
      <Wrapper>
        <Slides>
          {images &&
            images.map((image, i) => (
              <LargeSlide key={i} slide={this.state.slides[i]}>
                <img src={image} alt={i} />
              </LargeSlide>
            ))}
        </Slides>

        <Thumbnails>
          {images &&
            images.map((image, i) => (
              <li key={i}>
                <ThumbnailImg
                  src={image}
                  alt={i}
                  onClick={this.slideIn}
                  height={this.state.slides.length}
                />
              </li>
            ))}
        </Thumbnails>
      </Wrapper>
    );
  }
}

export default ThumbnailSlider;
