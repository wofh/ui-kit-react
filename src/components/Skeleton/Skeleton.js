import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { color } from '../../shared/styles'

export const skeletonColors = {
   base: color.light,
   highlight: color.lighter
}

export const skeletonKeyframes = keyframes`
   0% {
      background-position: -200px 0;
   }
   100% {
      background-position: calc(200px + 100%) 0;
   }
`;

export const skeletonStyles = css`
   background-color: ${skeletonColors.base};
   background-image: linear-gradient(
      90deg,
      ${skeletonColors.base},
      ${skeletonColors.highlight},
      ${skeletonColors.base}
   );
   background-size: 200px 100%;
   background-repeat: no-repeat;
   border-radius: 4px;
   display: inline-block;
   line-height: 1;
   width: 100%;

   ${props => props.width && css`
      width: ${(typeof props.width == 'number') ? (props.width + 'px') : props.width};
   `}

   ${props => props.height && css`
      height: ${(typeof props.height == 'number') ? (props.height + 'px') : props.height};
   `}

   ${props => (props.circle && props.height && props.width) && css`
      border-radius: 50%;
   `}
`;

const StyledSkeleton = styled.span`
   ${css`${skeletonStyles}`}
   animation: ${skeletonKeyframes} ${props => props.duration}s ease-in-out infinite;
`;

/**
 * The <Skeleton> component is designed to be used directly inside the components, in place of content while it's still loading. It will adapt automatically to fit the correct dimensions.
 */
export const Skeleton = (props) => {
   const elements = [];

   for (let i = 0; i < props.count; i++) {
      elements.push(
         <StyledSkeleton {...props} key={i}>&zwnj;</StyledSkeleton>
      );
   }

   return (
      <>
         {elements}
      </>
   );
};

Skeleton.propTypes = {

   /**
    * Number of lines
    */
   count: PropTypes.number,

   /**
    * Animation speed
    */
   duration: PropTypes.number,

   /**
    * Width of the skeleton
    */
   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

   /**
    * Height of the skeleton
    */
   height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

   /**
    * If `true` makes the skeleton look like a circle based on the given width and height
    */
   circle: PropTypes.bool,
};

Skeleton.defaultProps = {
   count: 1,
   duration: 1.2,
   circle: false,
   width: null,
   height: null,
};
