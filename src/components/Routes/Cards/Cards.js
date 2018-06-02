import React from 'react';
import styled from 'styled-components';
import CopyButton from './../../Widgets/CopyButton';
import HalfFullCard from '../../CardComponents/HalfFullCard/HalfFullCard';
import PoppingCard from '../../CardComponents/PoppingCard/PoppingCard';
import OutlineFillCard from '../../CardComponents/OutlineFillCard/OutlineFillCard';

const MainWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  border-bottom: 2px solid #eee;
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  &:last-child {
    border: none;
  }

  /* CopyButton */
  & > :nth-child(3) {
    margin-bottom: 50px;
  }

  /* Card Animation Logic */
  transition: 250ms;
  &:hover {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.09);
  }

  &:hover:first-child {
    box-shadow: 0 11px 16px -5px rgba(0, 0, 0, 0.05);
  }
  &:hover:last-child {
    box-shadow: 0 -11px 16px -5px rgba(0, 0, 0, 0.05);
  }
`;

const ComponentHeading = styled.h2`
  text-align: center;
  padding: 10px 60px;
  border-bottom: 2px solid #eee;
`;

const ComponentWrapper = styled.div`
  flex: 1 1 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 30px;
  }

  @media (max-width: 923px) {
    flex-direction: column;
  }
`;

const Cards = () => {
  return (
    <MainWrapper>
      <CardWrapper>
        <ComponentHeading>PoppingCard</ComponentHeading>
        <ComponentWrapper>
          <PoppingCard />
          <PoppingCard />
        </ComponentWrapper>
        <CopyButton id="Cards/PoppingCard" />
      </CardWrapper>
      <CardWrapper>
        <ComponentHeading>HalfFullCard</ComponentHeading>
        <ComponentWrapper>
          <HalfFullCard />
        </ComponentWrapper>
        <CopyButton id="Cards/HalfFullCard" />
      </CardWrapper>
      <CardWrapper>
        <ComponentHeading>OutlineFillCard</ComponentHeading>
        <ComponentWrapper>
          <OutlineFillCard />
          <OutlineFillCard />
          <OutlineFillCard />
        </ComponentWrapper>
        <CopyButton />
      </CardWrapper>
    </MainWrapper>
  );
};

export default Cards;
