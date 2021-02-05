import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spacing, color } from '../../shared/styles';

const StyledDropdownDivider = styled.div`
   padding: ${spacing.padding.small}px 0;

   &:after {
      position: absolute;
      display: block;
      content: "";
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${color.mediumlight};
   }
`;

export const DropdownDivider = ({ children, iconLeft, iconRight, ...props }) => {
   return <StyledDropdownDivider />
}

DropdownDivider.propTypes = {};

DropdownDivider.defaultProps = {};
