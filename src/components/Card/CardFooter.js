import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, padding } from '../Box'
import { color, spacing } from '../../shared/styles'

const StyledCardFooter = styled(Box)`
   padding: ${spacing.padding.medium * 0.75}px ${spacing.padding.medium}px;
   box-shadow: 0 -1px 0 0 ${color.medium};
`;

export const CardFooter = (props) => {
   return <StyledCardFooter {...props}>{props.children}</StyledCardFooter>
}

CardFooter.propTypes = {

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),
};

CardFooter.defaultProps = {
   align: 'left'
};
