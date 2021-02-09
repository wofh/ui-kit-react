import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { color, spacing } from '../../shared/styles'

const StyledCardFooter = styled(Box)`
   box-shadow: 0 -1px 0 0 ${color.medium};
   ${(props) => props.pad && css`
      padding: ${(spacing.padding[props.pad] || spacing.padding.medium) * 0.5}px ${spacing.padding[props.pad] || spacing.padding.medium}px;
   `}
`;

export const CardFooter = (props) => {
   return <StyledCardFooter {...props}>{props.children}</StyledCardFooter>
}

CardFooter.propTypes = {

   /**
    * Padding
    */
   pad: PropTypes.oneOf(Object.keys(spacing.padding)),

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),
};

CardFooter.defaultProps = {
   pad: 'medium',
   align: 'left'
};
