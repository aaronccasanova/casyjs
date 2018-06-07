import React, { Component } from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';
// import UsageButton from './UsageButton';
import ExpandingUsageBox from './ExpandingUsageBox';

const Wrapper = styled.section`
  position: relative;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eeeeee;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);

  position: relative;
`;

const ComponentName = styled.h2`
  text-align: center;
  padding: 30px 35px 10px;
  border-bottom: 2px solid #eee;
  white-space: nowrap;
`;

const CPComponent = styled.div`
  margin: 25px 0;
`;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreInfoButton = styled.div`
  flex-basis: 50%;
  border: 2px solid #eee;
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  transition: 240ms;

  & > div {
    background: #a9a9a9;
    width: 7px;
    height: 7px;
    margin: 4px;
    border-radius: 50%;
  }

  ${Wrapper}:hover & {
    border: 2px solid #d6d6d6;
  }
`;

const UsageSection = styled.div`
  background: #fff;
  box-shadow: 0 45px 20px -20px rgba(0, 0, 0, 0.20);
  border-left: 1px solid #eeeeee;
  border-right: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  position: absolute;
  top: 210px;
  /* top: 90px; */
  left: 0;
  right: 0;
  z-index: 1000;
  display: ${props => (props.exampleActive ? 'block' : 'none')}
  transition: 300ms;

  opacity: ${props => (props.exampleActive ? '1' : '0')};
`;

class CopyPasteCard extends Component {
  state = {
    exampleActive: false
  };

  handleClick = () => {
    this.setState({
      exampleActive: !this.state.exampleActive
    });
  };

  render() {
    return (
      <Wrapper exampleActive={this.state.exampleActive}>
        <Card>
          <ComponentName>{this.props.cpName}</ComponentName>
          <CPComponent>{this.props.children}</CPComponent>
          <FooterWrapper>
            <CopyButton id={this.props.id} />
          </FooterWrapper>
        </Card>
        <MoreInfoButton onClick={this.handleClick}>
          <div />
          <div />
          <div />
        </MoreInfoButton>
        <UsageSection exampleActive={this.state.exampleActive}>
          <ExpandingUsageBox
            exampleActive={this.handleClick}
            id={this.props.id}
          />
        </UsageSection>
      </Wrapper>
    );
  }
}

export default CopyPasteCard;
