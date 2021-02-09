import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { color, spacing } from '../../shared/styles'

const StyledCardHeader = styled(Box)`
   font-weight: 500;
   box-shadow: 0 1px 0 0 ${color.medium};
   color: ${color.primary};
   ${(props) => props.pad && css`
      padding: ${(spacing.padding[props.pad] || spacing.padding.medium) * 0.5}px ${spacing.padding[props.pad] || spacing.padding.medium}px;
   `}
`;

export const CardHeader = (props) => {
   return <StyledCardHeader {...props}>{props.children}</StyledCardHeader>
}

CardHeader.propTypes = {

   /**
    * Padding
    */
   pad: PropTypes.oneOf(Object.keys(spacing.padding)),

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),
};

CardHeader.defaultProps = {
   pad: 'medium',
   align: 'left'
};
