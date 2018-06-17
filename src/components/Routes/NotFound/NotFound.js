import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 20px auto 40px;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1111px;
  max-height: 60%;
  background: black;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.55;
`;

const AbsoluteHeading = css`
  color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainHeading = styled.h1`
  ${AbsoluteHeading};
  font-weight: bold;
  top: 23%;
`;

const SubHeading = styled.h2`
  ${AbsoluteHeading};
  white-space: nowrap;
  top: 33%;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Content>
        <Image
          src="https://images.unsplash.com/photo-1501511795728-df53825d742a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec63be59e881ffa2ed65339c27e4db90&auto=format&fit=crop&w=634&q=80"
          alt="NotFound"
        />
        <MainHeading>404</MainHeading>
        <SubHeading>Page Not Found</SubHeading>
      </Content>
    </Wrapper>
  );
};

export default NotFound;
