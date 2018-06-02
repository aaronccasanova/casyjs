import React from 'react';
import styled from 'styled-components';
import CopyPasteFlexGrid from './../../Widgets/CopyPasteFlexGrid';
import CopyPasteCard from './../../Widgets/CopyPasteCard';

import ToXToggler from './../../NavigationComponents/NavTogglers/ToXToggler/ToXToggler';
import FlattenToggler from './../../NavigationComponents/NavTogglers/FlattenToggler/FlattenToggler';

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <CopyPasteFlexGrid>
        <CopyPasteCard cpName="ToXToggler" id="Navigation/ToXToggler">
          <ToXToggler />
        </CopyPasteCard>
        <CopyPasteCard cpName="FlattenToggler" id="Navigation/FlattenToggler">
          <FlattenToggler />
        </CopyPasteCard>
        <CopyPasteCard cpName="FlattenToggler" id="Navigation/FlattenToggler">
          <FlattenToggler />
        </CopyPasteCard>
        <CopyPasteCard cpName="FlattenToggler" id="Navigation/FlattenToggler">
          <FlattenToggler />
        </CopyPasteCard>
      </CopyPasteFlexGrid>
    </Wrapper>
  );
};

export default Navigation;
