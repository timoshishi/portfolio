import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TechLogoWrap = styled.div`
  max-height: 2rem;
  max-width: 2rem;
`;
const TechLogo = styled.img`
  max-height: 2rem;
  max-width: 2rem;
`;
const TechItem = ({ techInfo }) => {
  return (
    <div>
      <TechLogoWrap>
        <TechLogo src={techInfo.thumb} />
      </TechLogoWrap>
    </div>
  );
};

TechItem.propTypes = {
  techInfo: PropTypes.object.isRequired,
};

export default TechItem;
