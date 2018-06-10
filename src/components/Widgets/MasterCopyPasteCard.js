import React, { Component } from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import ExpandingUsageBox from './ExpandingUsageBox';

const Wrapper = styled.div`
  &::after {
    content: '';
    display: ${props => (props.expand ? 'block' : 'none')};
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    z-index: 998;
  }
`;

const Card = styled.div`
  border: 1px solid var(--cp-light-grey);
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);
  margin-bottom: ${props => (props.expand ? '25px' : null)};

  position: ${props => (props.expand ? 'absolute' : null)};
  top: ${props => (props.expand ? `${props.scrollPosition + 25}px` : null)};
  left: ${props => (props.expand ? '50%' : null)};
  transform: ${props => (props.expand ? 'translateX(-50%)' : null)};
  z-index: ${props => (props.expand ? 1000 : null)};
  width: ${props =>
    props.expand
      ? 'calc(280px + (680 - 280) * (100vw - 320px) / (750 - 320))'
      : null};
  height: ${props => (props.expand ? null : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ComponentWrapper = styled.div`
  border: 1px solid var(--cp-light-grey);
  background: var(--cp-off-white);
  width: 100%;
  min-height: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CPComponent = styled.div`
  padding: 15px;
`;

const CopyPasteBar = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 50px;
  padding: 10px 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > :nth-child(2) {
    transform: translateX(12px);
  }
`;

const MoreInfoButton = styled.div`
  cursor: pointer;
  border: 1px solid var(--cp-light-grey);
  display: flex;
  margin-right: auto;
  padding: 6px;
  transition: 250ms;

  &:hover {
    border: 1px solid #d6d6d6;
  }

  & > div {
    background: var(--cp-grey);
    width: 6px;
    height: 6px;
    margin: 4px;
    border-radius: 50%;
  }
`;

const ExpandHeaderWrapper = styled.div`
  display: ${props => (props.expand ? 'flex' : 'none')};
  justify-content: ${props => (props.expand ? 'space-between' : null)};
  align-items: ${props => (props.expand ? 'center' : null)};
  width: 100%;
`;

const ComponentName = styled.h2`
  display: ${props => (props.expand ? 'block' : 'none')};
`;

const CardX = styled.h2`
  display: ${props => (props.expand ? 'block' : 'none')};
  font-size: calc(20px + (25 - 20) * (100vmin - 320px) / (750 - 320));
  cursor: pointer;
  padding: 15px 0 15px 15px;
`;

const FixedX = styled.h2`
  cursor: pointer;
  display: ${props => (props.expand ? 'flex' : 'none')};
  justify-content: ${props => (props.expand ? 'center' : 'none')};
  align-items: ${props => (props.expand ? 'center' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  font-size: calc(40px + (80 - 40) * (100vmin - 320px) / (750 - 320));
  width: 100%;
  height: 100%;
  color: var(--cp-light-grey);
`;

class MasterCopyPasteCard extends Component {
  state = {
    cpName: '',
    expand: false,
    scrollPosition: null
  };

  handleExpand = () => {
    let scrollPosition = window.scrollY;
    this.setState({
      scrollPosition,
      expand: !this.state.expand
    });
  };

  getComponentName = id => {
    let name = id.split('/')[1];
    return name;
  };

  render() {
    return (
      <Wrapper expand={this.state.expand}>
        <Card
          expand={this.state.expand}
          scrollPosition={this.state.scrollPosition}
        >
          <ExpandHeaderWrapper expand={this.state.expand}>
            <ComponentName expand={this.state.expand}>
              {this.getComponentName(this.props.id)}
            </ComponentName>
            <CardX expand={this.state.expand} onClick={this.handleExpand}>
              X
            </CardX>
          </ExpandHeaderWrapper>
          <ComponentWrapper>
            <CPComponent>{this.props.children}</CPComponent>
          </ComponentWrapper>
          <CopyPasteBar>
            <MoreInfoButton onClick={this.handleExpand}>
              <div />
              <div />
              <div />
            </MoreInfoButton>
            <CopyButton id={this.props.id} />
          </CopyPasteBar>
          <ExpandingUsageBox id={this.props.id} expand={this.state.expand} />
        </Card>
        <FixedX expand={this.state.expand} onClick={this.handleExpand}>
          X
        </FixedX>
      </Wrapper>
    );
  }
}

export default MasterCopyPasteCard;
