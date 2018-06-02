import React from 'react';
import styled from 'styled-components';
import CopyPasteFlexGrid from './../../Widgets/CopyPasteFlexGrid';
import CopyPasteCard from './../../Widgets/CopyPasteCard';

import FlattenHamToggle from './../../NavigationComponents/NavTogglers/FlattenToggler/FlattenHamToggle';
import HamToXToggle from './../../NavigationComponents/NavTogglers/HamToX/HamToXToggle';

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <CopyPasteFlexGrid>
        <CopyPasteCard cpName="HamToXToggle" id="Navigation/HamToXToggle">
          <HamToXToggle />
        </CopyPasteCard>
        <CopyPasteCard
          cpName="FlattenHamToggle"
          id="Navigation/FlattenHamToggle"
        >
          <FlattenHamToggle />
        </CopyPasteCard>
      </CopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Navigation;
