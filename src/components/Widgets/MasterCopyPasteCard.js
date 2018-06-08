import React, { Component } from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import ExpandingUsageBox from './ExpandingUsageBox';

const Wrapper = styled.div`
  position: ${props => (props.expand ? 'fixed' : null)};
  top: ${props => (props.expand ? '50%' : '0')};
  left: ${props => (props.expand ? '50%' : '0')};
  transform: ${props =>
    props.expand ? 'translate(-50%, -50%)' : 'translate(0%, 0%)'};
  z-index: ${props => (props.expand ? 1000 : null)};
  min-height: 250px;
  height: ${props => (props.expand ? '95vh' : null)};
  transition: transform ${props => (props.expand ? '300ms' : '923ms')},
    top ${props => (props.expand ? '300ms' : '923ms')},
    left ${props => (props.expand ? '300ms' : '923ms')};
`;

const Card = styled.div`
  overflow-y: auto;
  width: ${props => (props.expand ? '90vw' : null)};
  height: ${props => (props.expand ? '90vh' : '100%')};
  /* height: 100%; */
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
    background: rgba(0, 0, 0, 0.25);
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
  /* ---------For Editing Layout---------- */
  /* border: 2px solid #d6d6d6; */
  /* ------------------------------------- */
  width: 100%;
  min-height: 50px;
  padding: 10px;
  /* padding: 7px; */

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

class MasterCopyPasteCard extends Component {
  state = {
    expand: false
  };

  handleExpand = () => {
    this.setState({
      expand: !this.state.expand
    });
  };

  render() {
    return (
      <Wrapper expand={this.state.expand}>
        <Card expand={this.state.expand}>
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
