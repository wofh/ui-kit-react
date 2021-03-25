import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box, padding } from '../Box'
import { spacing, color } from '../../shared/styles';

const StyledDropdownContent = styled(Box)`
   display: none;
   position: absolute;
   line-height: 1.2;
   border-radius: ${spacing.borderRadius.small}px;

   ${props => props.open && css`
      display: block;
      z-index: 1000;
   `}

   ${props => (props.border && props.border > 0) && css`
      border: ${props.border}px solid ${color.mediumlight};
      box-shadow: 0 5px 5px -2px rgba(0, 0, 0, 10%), 0 5px 10px -2px rgba(0, 0, 0, 15%);
   `}

   ${props => (props.position === 'bottom-right' || props.position === 'bottom') && css`
      top: 100%;
      right: 0;
   `}

   ${props => (props.position === 'bottom-left') && css`
      top: 100%;
      left: 0;
   `}

   ${props => (props.position === 'top-right' || props.position === 'top') && css`
      bottom: 100%;
      right: 0;
   `}

   ${props => (props.position === 'top-left') && css`
      bottom: 100%;
      left: 0;
   `}

   ${props => (props.position === 'left-top' || props.position === 'left') && css`
      right: 100%;
      top: 0;
   `}

   ${props => (props.position === 'left-bottom') && css`
      right: 100%;
      top: 100%;
   `}

   ${props => (props.position === 'right-top' || props.position === 'right') && css`
      left: 100%;
      top: 0;
   `}

   ${props => (props.position === 'right-bottom') && css`
      left: 100%;
      top: 100%;
   `}

   ${props => (typeof props.position === 'object') && css`
      ${props => props.position.top === 'top' && css`top: 0;`}
      ${props => props.position.top === 'bottom' && css`top: 100%;`}
      ${props => props.position.right === 'right' && css`right: 0;`}
      ${props => props.position.right === 'left' && css`right: 100%;`}

      ${props => props.position.bottom === 'bottom' && css`bottom: 0;`}
      ${props => props.position.bottom === 'top' && css`bottom: 100%;`}
      ${props => props.position.left === 'left' && css`left: 0;`}
      ${props => props.position.left === 'right' && css`left: 100%;`}
   `}
`;

export const DropdownContent = (props) => {
   return <StyledDropdownContent {...props}>{props.children}</StyledDropdownContent>
}


DropdownContent.propTypes = {

   /**
    * Padding around the dropdown content
    */
   pad: PropTypes.oneOf(Object.keys(padding)),

   /**
    * Alignment of the dropdown content
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),

   /**
    * Background color of the dropdown content
    */
   background: PropTypes.string,

   /**
    * Border weight of the dropdown content
    */
   border: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

   /**
    * Width of the dropdown content. It can be an object with `min` and `max` keys to set accordingly min-width and max-width.
    */
   w: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.shape({
         min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
         max: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      })
   ])
};

DropdownContent.defaultProps = {
   pad: 'small',
   align: 'left',
   background: null,
   border: 1,
   w: null
};
