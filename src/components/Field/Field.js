import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../shared/styles';
import {StyledInput , StyledInputBox} from './Input';
import { StyledTextarea } from './Textarea';



const StyledDescription = styled.p`
   font-size: 10px;
   padding: 3px 0 4px 5px;
   color: ${ color.mediumdark };
`;

const StyledLabel = styled.p`
   padding-left:5px;
   margin:3px 0 5px 0;
   
`;

const StyledError = styled.p`
   width:auto;
   height:auto;
   color:${color.danger};
   font-size: 12px;
   padding-left:7px;
   margin-top: 7px;
`;


const GetField = (props) => {
   let FieldType;
   switch(props.type){
      case 'text':
      case 'password':
      case 'email':
         FieldType = <StyledInput  type={props.type} placeholder={props.placeholder} defaultValue={props.value} onChange={props.onChange} {...props} />;
         break; 
      case 'textarea':
         FieldType = <StyledTextarea rows='5'  {...props}/>;
         break;
   }
   return ( FieldType );
}
const Error = (props) => {
   if(!props.error) return null;
   return <StyledError> {props.error} </StyledError>
}


export const Field = (props) => { 
   
   return (
         <StyledInputBox>
            { props.label ? <StyledLabel>{props.label}</StyledLabel> : null}
            <StyledDescription >{ props.description ? props.description : '' }</StyledDescription>
            <GetField  {...props} />
            <Error  {...props}/> 
         </StyledInputBox>   
   )
};

Field.propTypes = {
   type : PropTypes.oneOf(['text', 'textarea', 'password', 'email']).isRequired,
   label : PropTypes.string,
   description : PropTypes.string,
   error : PropTypes.string,
   placeholder : PropTypes.string,
   onChange : PropTypes.func,
   value : PropTypes.string,
   success : PropTypes.bool,
};

Field.defaultProps = {
   type : 'text',
   error : '',
   success : false
};