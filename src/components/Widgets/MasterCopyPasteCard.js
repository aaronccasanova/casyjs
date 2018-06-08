import React, { Component } from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import ExpandingUsageBox from './ExpandingUsageBox';

const Wrapper = styled.div`
  transform: ${props => (props.expand ? 'translateX(-50%)' : null)};
  position: ${props => (props.expand ? 'fixed' : null)};
  bottom: ${props => (props.expand ? '0' : null)};
  left: ${props => (props.expand ? '50%' : null)};
  z-index: ${props => (props.expand ? 1000 : null)};
  min-height: 250px;
  display: ${props => (props.expand ? 'flex' : null)};
  justify-content: ${props => (props.expand ? 'center' : null)};
  align-items: ${props => (props.expand ? 'flex-end' : null)};
  /* flex-direction: ${props => (props.expand ? 'column' : null)};
  justify-content: ${props => (props.expand ? 'flex-end' : null)};
  align-items: ${props => (props.expand ? 'flex-end' : null)}; */
`;

const Card = styled.div`
  overflow: auto;
  width: ${props =>
    props.expand
      ? 'calc(280px + (680 - 280) * (100vw - 320px) / (750 - 320))'
      : null};
  height: ${props =>
    props.expand
      ? 'calc(225px + (630 - 225) * (100vh - 320px) / (750 - 320))'
      : '100%'};
  border: 1px solid #e6e6e6;
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150vw;
    height: 150vh;
    display: ${props => (props.expand ? 'block' : 'none')};
    z-index: -1;
  }
`;

const ComponentWrapper = styled.div`
  border: 1px solid #e6e6e6;
  background: #fafafa;
  width: 100%;
  min-height: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CPComponent = styled.div`
  padding: 20px;
`;

const CopyPasteBar = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MoreInfoButton = styled.div`
  cursor: pointer;
  border: 2px solid #eee;
  display: flex;
  margin-right: auto;
  padding: 6px;
  transition: 250ms;

  &:hover {
    border: 2px solid #d6d6d6;
  }

  & > div {
    background: #a9a9a9;
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
  padding: 25px 0;
`;

const ComponentName = styled.h2`
  display: ${props => (props.expand ? 'block' : 'none')};
  color: #3a3a3a;
`;

const X = styled.h2`
  display: ${props => (props.expand ? 'block' : 'none')};
  color: #3a3a3a;
  font-size: calc(20px + (25 - 20) * (100vmin - 320px) / (750 - 320));
  cursor: pointer;
`;

class MasterCopyPasteCard extends Component {
  state = {
    cpName: '',
    expand: false
  };

  handleExpand = () => {
    this.setState({
      expand: !this.state.expand
    });
  };

  getComponentName = id => {
    let [category, name] = id.split('/');
    return name;
  };

  render() {
    return (
      <Wrapper expand={this.state.expand}>
        <Card expand={this.state.expand}>
          <ExpandHeaderWrapper expand={this.state.expand}>
            <ComponentName expand={this.state.expand}>
              {this.getComponentName(this.props.id)}
            </ComponentName>
            <X expand={this.state.expand} onClick={this.handleExpand}>
              X
            </X>
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
      </Wrapper>
    );
  }
}

export default MasterCopyPasteCard;
