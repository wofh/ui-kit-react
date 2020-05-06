import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img``;

export const Image = (props) => <StyledImage {...props} />;

Image.propTypes = {
   src: PropTypes.string,
};

Image.defaultProps = {
   src: null,
};
