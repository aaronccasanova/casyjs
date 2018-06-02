import React from 'react';
import styled from 'styled-components';
import CopyButton from './CopyButton';

const Wrapper = styled.section`
  background: white;
  padding: 30px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eeeeee;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.07);
`;

const ComponentName = styled.h2`
  text-align: center;
  padding: 10px 35px;
  border-bottom: 2px solid #eee;
  white-space: nowrap;
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
