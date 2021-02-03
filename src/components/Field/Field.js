import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Input } from './Input';
import { Password } from './Password';
import { Textarea } from './Textarea';
import { color, spacing, typography } from '../../shared/styles';
import { Email } from './Email';

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

         case 'password':
            return <Password {...props} />;

         case 'text':
            return <Input {...props} />;
         case 'email':
            return <Email {...props} />;

         default:
            return <Input {...props} />;
      }
   }

   const getError = () => {
      return (typeof props.error === 'string') ? <StyledError>{props.error}</StyledError> : null
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
    * Type of the input field
    */
   type : PropTypes.oneOf(['text', 'textarea', 'password', 'email']).isRequired,

   /**
    * Label of the input field
    */
   label : PropTypes.string,

   /**
    * Description of the input field
    */
   description : PropTypes.string,

   /**
    * Error is a state. It can be either string or boolean. If it has error message and/or it is `true`, input changes its box-shadow to red and shows the error message below
    */
   error : PropTypes.oneOfType(PropTypes.string, PropTypes.bool),

   /**
    * Input's placeholder
    */
   placeholder : PropTypes.string,

   /**
    * Function. Called when change event occurs
    */
   onChange : PropTypes.func,

   /**
    * Input's value
    */
   value : PropTypes.string,

   /**
    * Success is a state. If `true`, input changes its box-shadow to green
    */
   success : PropTypes.bool,

   /**
    * Additional `margin-bottom` after component
    */
   spaceAfter: PropTypes.number,

   /**
    * Autofocus
    */
   autoFocus: PropTypes.bool,

   /**
    * The icon to show on the left side
    */
   iconLeft: PropTypes.string,

   /**
    * The icon to show on the right side
    */
   iconRight: PropTypes.string,
};

Field.defaultProps = {
   type : 'text',
   error : '',
   success : false,
   spaceAfter: undefined
};