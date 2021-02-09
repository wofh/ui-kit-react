import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { spacing } from '../../shared/styles'

const StyledCardContent = styled(Box)`
   ${(props) => props.pad && css`
      padding: ${(spacing.padding[props.pad] || spacing.padding.medium) * 0.5}px ${spacing.padding[props.pad] || spacing.padding.medium}px;
   `}
`;

export const CardContent = (props) => {
   return <StyledCardContent {...props}>{props.children}</StyledCardContent>
}

CardContent.propTypes = {

   /**
    * Padding
    */
   pad: PropTypes.oneOf(Object.keys(spacing.padding)),

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),
};

CardContent.defaultProps = {
   pad: 'medium',
   align: 'left'
};
