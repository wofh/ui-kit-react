import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { DropdownItem } from './DropdownItem'
import { DropdownContent } from './DropdownContent'
import { DropdownDivider } from './DropdownDivider'
import { padding } from '../Box'
import { useVisible } from '../hooks'

const StyledDropdownTrigger = styled.div``;

const StyledDropdown = styled.div`
   display: inline-flex;
   position: relative;
`;


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

   const getContent = () => {

      /**
       * Check if child content is already a DropdownContent
       */
      if (typeof children == 'object' && children.type === (<DropdownContent />).type) {
         return <children.type {...props} {...children.props} background={children.props.background || props.background} border={children.props.border || props.border} align={children.props.align || props.align} w={children.props.w || props.w} position={position} open={isOpen} />
      }

      return (
         <DropdownContent {...props} pad={pad} position={position} open={isOpen}>{children}</DropdownContent>
      )
   }

   return (
      <StyledDropdown {...props} ref={ref}>
         {getTrigger()}
         {getContent()}
      </StyledDropdown>
   );
};

Dropdown.Content = DropdownContent
Dropdown.Item = DropdownItem
Dropdown.Divider = DropdownDivider

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
    * Callback function called on dropdown open.
    */
   onOpen: PropTypes.func,

   /**
    * Callback function called on dropdown close.
    */
   onClose: PropTypes.func,

   /**
    * Padding around the dropdown content if no `<DropdownContent />` is used in child prop.
    */
   pad: PropTypes.oneOf(Object.keys(padding)),

   /**
    * Alignment of the dropdown content if no `<DropdownContent />` is used in child prop.
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),

   /**
    * Background color of the dropdown content if no `<DropdownContent />` is used in child prop.
    */
   background: PropTypes.string,

   /**
    * Border weight of the dropdown content if no `<DropdownContent />` is used in child prop.
    */
   border: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),

   /**
    * Width of the dropdown content if no `<DropdownContent />` is used in child prop. It can be an object with `min` and `max` keys to set accordingly min-width and max-width.
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

Dropdown.defaultProps = {
   trigger: undefined,
   position: 'bottom',
   open: false,
   onOpen: undefined,
   onClose: undefined,
   pad: 'medium',
   align: 'left',
   background: '#FFF',
   w: 200,
   border: 1
};
