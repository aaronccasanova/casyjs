import React from 'react';
import styled from 'styled-components';
import UnderlineTextImage from '../../ImageEffects/UnderlineTextImage/UnderlineTextImage';

const categories = [
  {
    title: 'Landing Pages',
    src:
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95e28710eb1a8fa0b8ae169dfe8b1367&auto=format&fit=crop&w=1950&q=80',
    alt: 'Navbars Section',
    path: '/landing-pages'
  },
  {
    title: 'Buttons',
    src:
      'https://images.unsplash.com/photo-1506604900144-7360175909e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d437158dff03180ed32cc39401b3a894&auto=format&fit=crop&w=2110&q=80',
    alt: 'Images Section',
    path: '/buttons'
  },
  {
    title: 'Cards',
    src:
      'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c2d910abcc9bb04fcb180f6a45e407&auto=format&fit=crop&w=1991&q=80',
    alt: 'Buttons Section',
    path: '/cards'
  },
  {
    title: 'Navigation',
    src:
      'https://images.unsplash.com/photo-1520257119747-9591a2d38189?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89acb684d21ffbb4b1224d1034a262e8&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section',
    path: '/navigation'
  },
  {
    title: 'Home',
    src:
      'https://images.unsplash.com/photo-1468536029150-d16666b345a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76cbe28a65bee152cb0d6fb2898cfb4f&auto=format&fit=crop&w=2100&q=80',
    alt: 'Buttons Section',
    path: '/'
  }
];

/*
HalvingGallery has two containers
(provides better control over the grid gap)

Main Wrapper - HalvingGallery
use margin or padding to create space around the actual grid

Sub Wrapper - ImageContainer
recommend to only adjust --gap,
and not mess with margin or padding

Special Note: must use overflow-x:hidden on main root because the negative margin
*/

const MainWrapper = styled.div`
  /* ---- CSS Variables Section ----- */
  --gallery-width: 100%;
  --gallery-height: 100%;
  /* --gallery-height: 50vh; */
  --gallery-padding: 20px;
  --gap: 10px;
  --pri-img-width: 33.33%;
  --sec-img-width: 50%;
  /* -------------------------------- */
  margin: 0 auto;
  padding: var(--gallery-padding);
  width: var(--gallery-width);
  min-height: var(--gallery-height);
`;

const SubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: calc(var(--gap) * -1);
`;

const Image = styled.div`
  /* ---------For Editing Layout---------- */
  background: #c5c5c5;
  /* ------------------------------------- */
  margin: var(--gap);
  flex: calc(var(--pri-img-width) - var(--gap) * 2);

  &:nth-of-type(5n + 4),
  &:nth-of-type(5n) {
    --pri-img-width: var(--sec-img-width);
  }

  @media (max-width: 820px) {
    --pri-img-width: var(--sec-img-width);

    &:nth-of-type(3n) {
      --pri-img-width: 100%;
    }
  }
`;

const HalvingGallery = () => {
  return (
    <MainWrapper>
      <SubWrapper>
        {categories.map(category => {
          return (
            <Image key={category.title}>
              <UnderlineTextImage category={category} />
            </Image>
          );
        })}
      </SubWrapper>
    </MainWrapper>
  );
};

export default HalvingGallery;
