import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div``;

const Card = styled.div`
  border: 1px solid #e6e6e6;
  background: #fff;
  padding: 15px;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ComponentWrapper = styled.div`
  border: 1px solid #e6e6e6;
  background: #f1f1f1;
  /* ---------For Editing Layout---------- */
  /* border: 2px solid #dadada; */
  /* ------------------------------------- */
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CPComponent = styled.div``;

const CopyPasteBar = styled.div`
  /* ---------For Editing Layout---------- */
  /* border: 2px solid #d6d6d6; */
  /* ------------------------------------- */
  width: 100%;
  min-height: 50px;
  padding: 7px;

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

const ScissorAni = keyframes`
  0% {
   transform: rotate(90deg) translate(3px, -3px) scaleX(1);
  }

  50%{
transform: rotate(90deg) translate(3px, -3px) scaleX(0.1); 
  }

  100% {
   transform: rotate(90deg) translate(3px, -3px) scaleX(1);
  }
`;

const CopyIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  padding: 5px;

  span {
    font-size: 13px;
    display: inline-block;
    transform: rotate(90deg) translate(3px, -3px) scaleX(1);
    filter: brightness(37%);
  }
  &:hover span {
    animation: ${ScissorAni} 310ms linear;
  }
`;

class MasterCopyPasteCard extends Component {
  render() {
    return (
      <Wrapper>
        <Card>
          <ComponentWrapper>
            <CPComponent>{this.props.children}</CPComponent>
          </ComponentWrapper>
          <CopyPasteBar>
            <MoreInfoButton>
              {/* <MoreInfoButton onClick={this.handleClick}> */}
              <div />
              <div />
              <div />
            </MoreInfoButton>
            <CopyIcon>
              Copy<span role="img" aria-label="Cut Copy Paste">
                ️✂️
              </span>
              {/* <span role="img" aria-label="Copy To Clipboard">
                ️📋
              </span> */}
            </CopyIcon>
          </CopyPasteBar>
        </Card>
      </Wrapper>
    );
  }
}

export default MasterCopyPasteCard;
