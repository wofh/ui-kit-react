import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { Image } from '../Image'
import { color } from '../../shared/styles'

const StyledCardImage = styled(Box)`
   line-height: 0;
   box-shadow: inset 0 -1px 0 0 ${color.medium};
`;

export const CardImage = ({ src, ...props }) => {
   return (
      <StyledCardImage {...props} pad={'none'}>
         <Image src={src} />
      </StyledCardImage>
   )
}

CardImage.propTypes = {

   /**
    * Image source
    */
   src: PropTypes.string.isRequired
};

CardImage.defaultProps = {};
