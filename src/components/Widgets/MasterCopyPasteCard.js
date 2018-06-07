import React, { Component } from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
import ExpandingUsageBox from './ExpandingUsageBox';

const Wrapper = styled.div`
  display: ${props => (props.expand ? 'flex' : null)};
  justify-content: ${props => (props.expand ? 'center' : null)};
  min-height: ${props => (props.expand ? '90vh' : '250px')};
  transition: 300ms 100ms;
`;

const Card = styled.div`
  width: ${props => (props.expand ? '90vw' : null)};
  height: 100%;
  border: 1px solid #e6e6e6;
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  box-shadow: ${props =>
    props.expand
      ? '0 6px 45px rgba(0, 0, 0, 0.20)'
      : '0 10px 15px -5px rgba(0, 0, 0, 0.07)'};
  transition: ${props => (props.expand ? '160ms' : '700ms')};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
