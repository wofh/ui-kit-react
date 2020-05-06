import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing, typography } from '../../shared/styles';
import { useTheme } from '../hooks';

const as = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'];

const sizes = {
   xsmall: typography.size.m1,
   small: typography.size.m2,
   medium: typography.size.m3,
   large: typography.size.l1,
   xlarge: typography.size.l2,
   xxlarge: typography.size.l3,
};

const defaultSize = 'large';

const StyledHeading = styled.div`
   font-family: ${(props) => props.theme.typography.type.primary};
   font-size: ${(props) => sizes[props.size || defaultSize] || sizes[defaultSize]}px;
   font-weight: ${(props) => props.theme.typography.weight.semibold};
   line-height: 1.2;

   margin-bottom: ${(props) => spacing.margin[props.spaceAfter || 'none']}px;
`;

export const Heading = (props) => {
   const theme = useTheme();
   const propsWithTheme = { theme, ...props };

   return <StyledHeading {...propsWithTheme} />;
};

Heading.propTypes = {
   /**
    * The element used for the root node
    */
   as: PropTypes.oneOf(as),

   /**
    * The size of `Heading`
    */
   size: PropTypes.oneOf(Object.keys(sizes)),

   /**
    * Adds id HTML attribute to an element
    */
   id: PropTypes.string,

   /**
    * Additional `margin-bottom` after component
    */
   spaceAfter: PropTypes.oneOf(Object.keys(spacing.margin)),
};

Heading.defaultProps = {
   as: 'div',
   size: defaultSize,
   id: null,
   spaceAfter: 'none',
};
