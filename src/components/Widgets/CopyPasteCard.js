import React from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';

const Wrapper = styled.section`
  overflow: hidden;
  background: white;
  padding: 20px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eeeeee;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);
`;

const ComponentName = styled.h2`
  color: #646464;
  font-size: calc(20px + (24 - 20) * (100vmin - 320px) / (750 - 320));
  text-align: center;
  white-space: nowrap;
  position: relative;

  &::before {
    content: '';
    background: #eee;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: calc(100% + 15px);
    height: 2px;
    transition: 250ms;
  }
`;

const CPComponent = styled.div`
  margin: 25px 0;
`;

const CopyPasteCard = props => {
  return (
    <Wrapper>
      <ComponentName>{props.cpName}</ComponentName>
      <CPComponent>{props.children}</CPComponent>
      <CopyButton id={props.id} />
    </Wrapper>
  );
};

export default CopyPasteCard;
