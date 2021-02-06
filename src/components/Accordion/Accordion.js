import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { spacing, color } from '../../shared/styles'
import { hex2rgba } from '../../shared/mixins'

const StyledAccordionTitle = styled(Box)`
   position: relative;
   font-weight: 500;
   cursor: pointer;
   color: ${color.darker};
   background-color: ${color.light};
   border-radius: ${spacing.borderRadius.default}px;
`;

const StyledAccordionIcon = styled.span`
   position: absolute;
   right: ${spacing.padding.small}px;
   top: 50%;
   transform: translateY(-50%);
`;

const StyledAccordionContent = styled(Box)`
   position: relative;
   display: none;
   line-height: 1.2;
`;

const StyledAccordion = styled.div`
   position: relative;
   display: block;
   margin-bottom: ${spacing.margin.small}px;

   ${props => props.isOpen && css`
      ${StyledAccordionTitle} {
         color: ${color.primary};
         background-color: ${hex2rgba(color.primary, 0.1)};
      }

      ${StyledAccordionContent} {
         display: block;
      }
   `}
`;


export const Accordion = ({ children, title, onOpen, onClose, ...props }) => {

   const [isOpen, setIsOpen] = useState(props.open);

   const handleClick = (e) => {
      setIsOpen(!isOpen)

      if (isOpen) {
         if (onClose) onClose()
      }
      else {
         if (onOpen) onOpen()
      }
   }

   const getTitle = () => {
      return <StyledAccordionTitle pad={'small'} onClick={handleClick}>{title}<StyledAccordionIcon><Icon icon={isOpen?'arrowup':'arrowdown'} /></StyledAccordionIcon></StyledAccordionTitle>
   }

   const getContent = () => {
      return <StyledAccordionContent {...props}>{children}</StyledAccordionContent>
   }

   return (
      <StyledAccordion {...props} isOpen={isOpen}>
         {getTitle()}
         {getContent()}
      </StyledAccordion>
   );
};

Accordion.propTypes = {

   /**
    * A text defining the heading of the accordion.
    */
   title: PropTypes.string,

   /**
    * Defines the initial state of the accordion. If `true` the accordion will be initialized open.
    */
   open: PropTypes.bool,

   /**
    * Callback function called on accordion open.
    */
   onOpen: PropTypes.func,

   /**
    * Callback function called on accordion close.
    */
   onClose: PropTypes.func
};

Accordion.defaultProps = {
   open: false
};
