import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacing, typography } from '../../shared/styles';
import { useTheme } from '../hooks';

const as = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'];

const types = {
   h6: typography.size.s1,
   h5: typography.size.s3,
   h4: typography.size.m1,
   h3: typography.size.l1,
   h2: typography.size.l2,
   h1: typography.size.l3,
   subtitle: typography.size.m3,
   title: typography.size.l3,
   div: typography.size.s3,
};

const StyledHeading = styled.div`
   font-family: ${(props) => props.theme.typography.type.primary};
   font-size: ${(props) => types[props.type || 'div']}px;
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
    * The size type of Heading
    */
   type: PropTypes.oneOf(Object.keys(types)),

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
   type: null,
   id: null,
   spaceAfter: 'none',
};
