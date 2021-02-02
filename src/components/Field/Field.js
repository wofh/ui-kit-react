import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { color, spacing, typography } from '../../shared/styles';

const StyledLabel = styled.label`
   display: block;
   width: 100%;
   font-size: ${typography.size.s3}px;
   line-height: 1.5;
   margin-bottom: ${spacing.margin.small}px;
`;

const StyledDescription = styled.div`
   color: ${ color.mediumdark };
   font-size: ${typography.size.s2}px;
   line-height: 1.5;
   margin-bottom: ${spacing.margin.small}px;
`;

const StyledError = styled.div`
   color: ${color.danger};
   font-size: ${typography.size.s2}px;
   line-height: 1.5;
   margin-top: ${spacing.margin.small}px;
`;


const StyledField = styled.div`
   display: block;

   ${props => (typeof props.spaceAfter !== 'undefined') && css`
      margin-bottom: ${props.spaceAfter}px;
   `}
`;

export const Field = (props) => {

   const getField = () => {
      switch (props.type) {
         case 'textarea':
            return <Textarea {...props} />;

         case 'text':
         case 'password':
         case 'email':
            return <Input {...props} defaultValue={props.value} />;

         default:
            return <Input {...props} defaultValue={props.value} />;
      }
   }

   const getError = () => {
      return props.error ? <StyledError>{props.error}</StyledError> : null
   }

   const getDescription = () => {
      return props.description ? <StyledDescription>{props.description}</StyledDescription> : null
   }

   const getLabel = () => {
      return props.label ? <StyledLabel>{props.label}</StyledLabel> : null
   }

   return (
      <StyledField {...props}>
         {getLabel()}
         {getDescription()}
         {getField()}
         {getError()}
      </StyledField>
   )
};

Field.propTypes = {

   /**
    * Add some description here to describe the field prop, this will be displayed in storybook
    */
   type : PropTypes.oneOf(['text', 'textarea', 'password', 'email']).isRequired,

   /**
    * Description here
    */
   label : PropTypes.string,

   /**
    * Description here
    */
   description : PropTypes.string,

   /**
    * Description here
    */
   error : PropTypes.string,

   /**
    * Description here
    */
   placeholder : PropTypes.string,

   /**
    * Description here
    */
   onChange : PropTypes.func,

   /**
    * Description here
    */
   value : PropTypes.string,

   /**
    * Description here
    */
   success : PropTypes.bool,

   /**
    * Additional `margin-bottom` after component
    */
   spaceAfter: PropTypes.number,

   /**
    * Autofocus
    */
   autoFocus: PropTypes.bool
};

Field.defaultProps = {
   type : 'text',
   error : '',
   success : false,
   spaceAfter: undefined
};