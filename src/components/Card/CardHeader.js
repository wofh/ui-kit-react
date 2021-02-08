import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, padding } from '../Box'
import { color, spacing } from '../../shared/styles'

const StyledCardHeader = styled(Box)`
   padding: ${spacing.padding.medium * 0.5}px ${spacing.padding.medium}px;
   box-shadow: 0 1px 0 0 ${color.medium};
`;

export const CardHeader = (props) => {
   return <StyledCardHeader {...props}>{props.children}</StyledCardHeader>
}

CardHeader.propTypes = {

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),
};

CardHeader.defaultProps = {
   align: 'left'
};
