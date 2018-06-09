import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --grid-width: 100%;
  --grid-height: 50vh;
  --grid-padding: 13px;
  --gap: 13px;
  /* -------------------------------- */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--pri-off-white);
  padding: 40px var(--grid-padding);
  width: var(--grid-width);
  min-height: var(--grid-height);
  overflow: hidden;
`;

const NegativeGapWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: calc(var(--gap) * -1);

  > * {
    background-clip: content-box;
    padding: var(--gap);
    flex: 1 1 100%;

    @media (min-width: 700px) {
      flex: 1 1 50%;
    }

    @media (min-width: 1025px) {
      flex: 1 1 33%;
    }
  }
`;

const CopyPasteFlexGrid = props => {
  return (
    <Wrapper>
      <NegativeGapWrapper>{props.children}</NegativeGapWrapper>
    </Wrapper>
  );
};

export default CopyPasteFlexGrid;
