import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --grid-width: 100%;
  --grid-height: 50vh;
  --grid-padding: 13px;
  --gap: 13px;
  /* -------------------------------- */
  background: #f9f9f9;
  margin: 0 auto;
  padding: 40px var(--grid-padding);
  width: var(--grid-width);
  min-height: var(--grid-height);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NegativeGapWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: calc(var(--gap) * -1);

  & > * {
    flex: 1 1 auto;
    margin: var(--gap);
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
