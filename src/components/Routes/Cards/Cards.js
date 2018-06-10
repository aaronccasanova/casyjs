import React from 'react';
import styled from 'styled-components';
import HalfFullCard from '../../CardComponents/HalfFullCard';
import PopUpCard from '../../CardComponents/PopUpCard';
import PopOutCard from '../../CardComponents/PopOutCard';

import MasterCopyPasteFlexGrid from './../../Widgets/MasterCopyPasteFlexGrid';
import MasterCopyPasteCard from './../../Widgets/MasterCopyPasteCard';

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
`;

const Cards = () => {
  return (
    <Wrapper>
      <MasterCopyPasteFlexGrid>
        <MasterCopyPasteCard id="Cards/PopUpCard">
          <PopUpCard
            src="https://images.unsplash.com/photo-1505773170783-58f82a520465?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3288093a41bb48f021aac5c157d41af&auto=format&fit=crop&w=2100&q=80"
            alt="PlaceHolder"
            heading="Looky there..."
            paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            doloribus perspiciatis quidem nesciunt hic libero incidunt vero iusto
            dolor!"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Cards/HalfFullCard">
          <HalfFullCard
            mainHeading="&#x02116; 923"
            subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            content="Quia cum, corrupti assumenda autem fugiat nisi illo officia porro sint
            sunt fugit sed quas, quasi harum deserunt, suscipit consectetur
            repudiandae architecto!"
          />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Cards/PopOutCard">
          <PopOutCard icon="⪘" headingOne="YOU DO" headingTwo="THE MATH" />
        </MasterCopyPasteCard>
      </MasterCopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Cards;
