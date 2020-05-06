import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from '../../shared/styles';

const sizes = {
   xsmall: typography.size.s1,
   small: typography.size.s3,
   medium: typography.size.m1,
   large: typography.size.l1,
   xlarge: typography.size.l2,
   xxlarge: typography.size.l3,
};

const StyledText = styled.span`
   font-size: ${(props) => sizes[props.size || 'small']}px;
   line-height: 1.2;
`;

export const Text = (props) => <StyledText {...props} />;

Text.propTypes = {
   size: PropTypes.oneOf(Object.keys(sizes)),
};

Text.defaultProps = {
   size: 'small',
};
