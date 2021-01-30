import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
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

   ${props => (props.position === 'bottom') && css`
      top: 100%;
      right: 0;
   `}

   ${props => (props.position === 'top') && css`
      bottom: 100%;
      right: 0;
   `}

   ${props => (props.position === 'left') && css`
      right: 100%;
      top: 0;
   `}

   ${props => (props.position === 'right') && css`
      left: 100%;
      top: 0;
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
    *
    */
   position: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),

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
   pad: 'small',
   align: 'left',
   background: '#FFF',
   w: 200,
   open: false,
   onOpen: undefined,
   onClose: undefined
};
