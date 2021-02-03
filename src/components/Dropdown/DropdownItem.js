import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, padding } from '../Box'

const StyledDropdownItem = styled(Box)`

   ${props => props.onClick && css`
      cursor: pointer;

      &:hover {
         opacity: 0.75;
      }
   `}
`;

export const DropdownItem = ({ children, ...props }) => {
   return <StyledDropdownItem {...props}>{children}</StyledDropdownItem>
}

DropdownItem.propTypes = {

   /**
    * Padding around the dropdown item
    */
   pad: PropTypes.oneOf(Object.keys(padding)),

   /**
    * Alignment of the dropdown item
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),

   /**
    * Background color of the dropdown item
    */
   background: PropTypes.string,
};

DropdownItem.defaultProps = {
   pad: 'small',
   align: 'left',
   background: null,
};
