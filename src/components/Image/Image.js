import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
   max-width: 100%;
   height: auto;
`;

export const Image = (props) => <StyledImage {...props} />;

Image.propTypes = {
   src: PropTypes.string,
};

Image.defaultProps = {
   src: null,
};
