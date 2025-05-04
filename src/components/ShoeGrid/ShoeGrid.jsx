import React from 'react';
import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <WrapperOuter>
      <Wrapper>
        {SHOES.map((shoe) => (
          <ShoeCard key={shoe.slug} {...shoe} />
        ))}
      </Wrapper>
    </WrapperOuter>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  height: 0px;

  & > * {
    flex: 1 1 350px;
  }
`;

const WrapperOuter = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default ShoeGrid;
