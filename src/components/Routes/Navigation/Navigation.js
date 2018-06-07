import React from 'react';
import styled from 'styled-components';
import MasterCopyPasteCard from './../../Widgets/MasterCopyPasteCard';
import MasterCopyPasteFlexGrid from './../../Widgets/MasterCopyPasteFlexGrid';

import FlattenHamToggle from './../../NavigationComponents/NavTogglers/FlattenToggler/FlattenHamToggle';
import HamToXToggle from './../../NavigationComponents/NavTogglers/HamToX/HamToXToggle';

const Wrapper = styled.div``;

const Navigation = () => {
  return (
    <Wrapper>
      <MasterCopyPasteFlexGrid>
        <MasterCopyPasteCard id="Navigation/HamToXToggle">
          <HamToXToggle />
        </MasterCopyPasteCard>
        <MasterCopyPasteCard id="Navigation/FlattenHamToggle">
          <FlattenHamToggle />
        </MasterCopyPasteCard>
      </MasterCopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Navigation;
