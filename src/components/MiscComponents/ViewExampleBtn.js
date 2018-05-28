import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: #040404;
  background: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  font-size: calc(14px + (18 - 14) * (100vw - 320px) / (960 - 320));
  font-weight: bold;
  transition: 250ms;

  &:hover {
    opacity: 0.5;
  }
`;

const ViewExampleBtn = props => {
  return (
    <div>
      <Link href={props.href} target="_blank" rel="noopener noreferrer">
        ^ Example Found Here ^
      </Link>
    </div>
  );
};

export default ViewExampleBtn;
