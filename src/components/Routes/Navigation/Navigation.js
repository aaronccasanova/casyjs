import React from 'react';
import styled from 'styled-components';
import CopyPasteFlexGrid from './../../Widgets/CopyPasteFlexGrid';
import CopyPasteCard from './../../Widgets/CopyPasteCard';

import FlattenHamToggle from './../../NavigationComponents/NavTogglers/FlattenToggler/FlattenHamToggle';
import HamToXToggle from './../../NavigationComponents/NavTogglers/HamToX/HamToXToggle';

import MasterCopyPasteCard from './../../Widgets/MasterCopyPasteCard';
import MasterCopyPasteFlexGrid from './../../Widgets/MasterCopyPasteFlexGrid';

const Wrapper = styled.div``;

const Navigation = () => {
  return (
    <Wrapper>
      <MasterCopyPasteFlexGrid>
        <MasterCopyPasteCard>
          <HamToXToggle />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard>
          <HamToXToggle />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard>
          <HamToXToggle />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard>
          <HamToXToggle />
        </MasterCopyPasteCard>
      </MasterCopyPasteFlexGrid>
      {/* <CopyPasteFlexGrid>
        <CopyPasteCard cpName="HamToXToggle" id="Navigation/HamToXToggle">
          <HamToXToggle />
        </CopyPasteCard>
        <CopyPasteCard
          cpName="FlattenHamToggle"
          id="Navigation/FlattenHamToggle"
        >
          <FlattenHamToggle />
        </CopyPasteCard>
      </CopyPasteFlexGrid> */}
    </Wrapper>
  );
};

export default Navigation;
