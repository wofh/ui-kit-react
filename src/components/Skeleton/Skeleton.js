import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color } from '../../shared/styles';
import { skeletonGlow } from '../../shared/animation';

export const skeletonColors = {
   base: color.light,
   highlight: color.lighter,
};

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

   ${(props) =>
      props.w &&
      css`
         ${props.w === 'random'
            ? css`
                 width: ${Math.floor(Math.random() * (100 - 50 + 1)) + 50}%;
              `
            : css`
                 width: ${typeof props.w == 'number' ? props.w + 'px' : props.w};
              `}
      `}

   ${(props) =>
      props.h &&
      css`
         height: ${typeof props.h == 'number' ? props.h + 'px' : props.h};
      `}

   ${(props) =>
      props.circle &&
      props.h &&
      props.w &&
      css`
         border-radius: 50%;
      `}
`;

const StyledSkeleton = styled.span`
   ${css`
      ${skeletonStyles}
   `}
   animation: ${skeletonGlow} ${(props) => props.duration}s ease-in-out infinite;
`;

/**
 * The `<Skeleton />` component is designed to be used directly inside the components, in place of content while it's still loading. It will adapt automatically to fit the correct dimensions.
 */
export const Skeleton = (props) => {
   const elements = [];

   for (let i = 0; i < props.count; i++) {
      elements.push(
         <StyledSkeleton {...props} key={i}>
            &zwnj;
         </StyledSkeleton>
      );
   }

   return <>{elements}</>;
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
    * Width of the skeleton, Can be a number (e.g. `30`) or a string (e.g. `50%`, `80px` or `random`)
    */
   w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

   /**
    * Height of the skeleton
    */
   h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

   /**
    * If `true` makes the skeleton look like a circle based on the given width and height
    */
   circle: PropTypes.bool,
};

Skeleton.defaultProps = {
   count: 1,
   duration: 1.2,
   circle: false,
   w: '100%',
   h: null,
};
