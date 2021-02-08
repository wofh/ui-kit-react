import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { spacing, color } from '../../shared/styles';
import { width, height } from '../../shared/mixins';

export const padding = {
   none: 0,
   xsmall: spacing.padding.xsmall + 'px',
   small: spacing.padding.small + 'px',
   medium: spacing.padding.medium + 'px',
   large: spacing.padding.large + 'px',
};

const StyledBox = styled.div`
   padding: ${(props) => padding[props.pad]};
   ${(props) => props.align && 'text-align: ' + props.align};
   ${(props) =>
      props.background && 'background-color: ' + (color[props.background] || props.background)};

   ${props => props.w && width(props.w)}
   ${props => props.h && height(props.h)}

   ${props => props.spaceAfter && css`margin-bottom: ${props.spaceAfter}px;`}
`;

export const Box = (props) => <StyledBox {...props} />;

Box.propTypes = {

   /**
    * Padding
    */
   pad: PropTypes.oneOf(Object.keys(padding)),

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),

   /**
    * Background color
    */
   background: PropTypes.string,

   /**
    * Defines a custom bottom spacing
    */
   spaceAfter: PropTypes.number,

   /**
    * Height of the box. It can be an object with `min` and `max` keys to set accordingly min-height and max-height.
    */
   h: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.shape({
         min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
         max: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
   ]),

   /**
    * Width of the box. It can be an object with `min` and `max` keys to set accordingly min-width and max-width.
    */
   w: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.shape({
         min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
         max: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
   ]),
};

Box.defaultProps = {
   pad: 'small',
   h: null,
   w: null,
   spaceAfter: undefined
};
