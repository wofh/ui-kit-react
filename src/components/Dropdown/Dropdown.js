import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { DropdownItem } from './DropdownItem'
import { Box, padding } from '../Box'
import { useVisible } from '../hooks'
import { spacing } from '../../shared/styles';

const StyledDropdownTrigger = styled.div``;

const StyledDropdownContent = styled(Box)`
   display: none;
   border-radius: ${spacing.borderRadius.small}px;

   ${props => props.open && css`
      display: block;
      z-index: 1000;
   `}

   position: absolute;

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

const StyledDropdown = styled.div`
   display: inline-flex;
   position: relative;
`;

const DropdownContent = (props) => {
   return <StyledDropdownContent {...props}>{props.children}</StyledDropdownContent>
}

export const Dropdown = ({ children, trigger, pad, position, onOpen, onClose, ...props }) => {

   const [ref, isOpen, setIsOpen] = useVisible(props.open);

   const handleClick = (e) => {
      setIsOpen(!isOpen)

      if (isOpen) {
         if (onClose) onClose()
      }
      else {
         if (onOpen) onOpen()
      }
   }

   const getTrigger = () => {
      if (typeof trigger == 'object') {
         return <StyledDropdownTrigger position={position}><trigger.type {...trigger.props} onClick={handleClick} /></StyledDropdownTrigger>
      }

      return (
         <StyledDropdownTrigger position={position} onClick={handleClick}>{trigger}</StyledDropdownTrigger>
      )
   }

   return (
      <StyledDropdown {...props} ref={ref}>
         {getTrigger()}
         <DropdownContent {...props} pad={pad} position={position} open={isOpen}>{children}</DropdownContent>
      </StyledDropdown>
   );
};

Dropdown.Item = DropdownItem

Dropdown.propTypes = {

   /**
    * A node that defines the dropdown trigger. Can be any component like `<Button />`, `<Box />` or a simple text.
    */
   trigger: PropTypes.node.isRequired,

   /**
    * Defines the initial state of the dropdown. If `true` the dropdown will be initialized open.
    */
   open: PropTypes.bool,

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
    * The position of the dropdown content. It can be an object with the keys representing the side of the dropdown content you want to pair with the trigger element.
    */
   position: PropTypes.oneOfType([
      PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
      PropTypes.oneOfType([
         PropTypes.shape({
            top: PropTypes.oneOf(['top', 'bottom']),
            left: PropTypes.oneOf(['left', 'right'])
         }),
         PropTypes.shape({
            top: PropTypes.oneOf(['top', 'bottom']),
            right: PropTypes.oneOf(['left', 'right'])
         }),
         PropTypes.shape({
            bottom: PropTypes.oneOf(['top', 'bottom']),
            left: PropTypes.oneOf(['left', 'right'])
         }),
         PropTypes.shape({
            bottom: PropTypes.oneOf(['top', 'bottom']),
            right: PropTypes.oneOf(['left', 'right'])
         }),
      ])
   ]),

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
   ]),

   /**
    * Callback function called on dropdown open.
    */
   onOpen: PropTypes.func,

   /**
    * Callback function called on dropdown close.
    */
   onClose: PropTypes.func
};

Dropdown.defaultProps = {
   trigger: undefined,
   position: 'bottom',
   pad: 'none',
   align: 'left',
   background: '#FFF',
   w: 200,
   open: false,
   onOpen: undefined,
   onClose: undefined
};
