import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pill = styled.div`
  padding: 3px 10px;
  border-right: 1px solid ${props => props.theme.color('background')};
`;

const PillLeft = ({ children }) => (
  <Pill>
    { children }
  </Pill>
);

PillLeft.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PillLeft;
