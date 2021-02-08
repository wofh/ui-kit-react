import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, padding } from '../Box'
import { spacing } from '../../shared/styles'

const StyledCardContent = styled(Box)`
   padding: ${spacing.padding.medium * 0.5}px ${spacing.padding.medium}px;
`;

export const CardContent = (props) => {
   return <StyledCardContent {...props}>{props.children}</StyledCardContent>
}

CardContent.propTypes = {

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),
};

CardContent.defaultProps = {
   align: 'left'
};
