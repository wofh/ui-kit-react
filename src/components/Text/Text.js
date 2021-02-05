import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { typography, color } from '../../shared/styles';

const sizes = {
   xsmall: typography.size.s1,
   small: typography.size.s2,
   default: typography.size.s3,
   medium: typography.size.m1,
   large: typography.size.l1,
   xlarge: typography.size.l2,
   xxlarge: typography.size.l3,
};

const StyledText = styled.span`
   line-height: 1.5;

   font-size: ${(props) => sizes[props.size || 'default']}px;

   ${(props) => props.color && css`
      color: ${color[props.color] || props.color};
   `};

   ${(props) => props.weight && css`
      font-weight: ${typography.weight[props.weight] || props.weight};
   `};
`;

export const Text = (props) => <StyledText {...props} />;

Text.propTypes = {
   size: PropTypes.oneOf(Object.keys(sizes)),
   color: PropTypes.string,
   weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Text.defaultProps = {
   size: 'default',
};
