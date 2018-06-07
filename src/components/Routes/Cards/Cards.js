import React from 'react';
import styled from 'styled-components';
import CopyButton from './../../Widgets/CopyButton';
import HalfFullCard from '../../CardComponents/HalfFullCard';
import PopUpCard from '../../CardComponents/PopUpCard';
import PopOutCard from '../../CardComponents/PopOutCard';

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
        <ComponentHeading>PopUpCard</ComponentHeading>
        <ComponentWrapper>
          <PopUpCard
            src="https://images.unsplash.com/photo-1505773170783-58f82a520465?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3288093a41bb48f021aac5c157d41af&auto=format&fit=crop&w=2100&q=80"
            alt="PlaceHolder"
            heading="Looky there..."
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus perspiciatis quidem nesciunt hic libero incidunt vero iusto
          dolor!"
          />
          <PopUpCard
            src="https://images.unsplash.com/photo-1505773170783-58f82a520465?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3288093a41bb48f021aac5c157d41af&auto=format&fit=crop&w=2100&q=80"
            alt="PlaceHolder"
            heading="Looky there..."
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          doloribus perspiciatis quidem nesciunt hic libero incidunt vero iusto
          dolor!"
          />
        </ComponentWrapper>
        <CopyButton id="Cards/PopUpCard" />
      </CardWrapper>
      <CardWrapper>
        <ComponentHeading>HalfFullCard</ComponentHeading>
        <ComponentWrapper>
          <HalfFullCard
            mainHeading="&#x02116; 923"
            subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            content="Quia cum, corrupti assumenda autem fugiat nisi illo officia porro sint
        sunt fugit sed quas, quasi harum deserunt, suscipit consectetur
        repudiandae architecto!"
          />
        </ComponentWrapper>
        <CopyButton id="Cards/HalfFullCard" />
      </CardWrapper>
      <CardWrapper>
        <ComponentHeading>PopOutCard</ComponentHeading>
        <ComponentWrapper>
          <PopOutCard icon="⪘" headingOne="YOU DO" headingTwo="THE MATH" />
          <PopOutCard icon="⪘" headingOne="YOU DO" headingTwo="THE MATH" />
          <PopOutCard icon="⪘" headingOne="YOU DO" headingTwo="THE MATH" />
        </ComponentWrapper>
        <CopyButton id="Cards/PopOutCard" />
      </CardWrapper>
    </MainWrapper>
  );
};

export default Cards;
