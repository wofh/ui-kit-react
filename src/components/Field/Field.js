import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled, {css} from 'styled-components';
import { color } from '../../shared/styles';

const Input = styled.input`
   width:100%;
   height:32px;
   display:block;
   border:solid 1px;
   border-radius:8px;
   text-indent:12px;
   border: 1px solid lightgrey;
   ${(props) =>
      props.type == 'text' &&
      css`
      &:focus {
         box-shadow: 1px 1px 5px ${color.primary};
      }
      `}
   ${(props) =>
      props.error  &&
      css`
      color: ${color.danger};
      border: 1px solid ${color.danger};
      &:focus {
         box-shadow: 1px 1px 5px ${color.danger};
      }
      &::-webkit-input-placeholder {
         color: ${color.danger};
      };
      `}
      ${(props) =>
      props.success &&
      css`
      color: ${color.success};
      border: 1px solid ${color.success};
      &:focus {
         box-shadow: 1px 1px 5px ${color.success}; }
      &::-webkit-input-placeholder {
         color: ${color.success};
      };
      `}
   `
const Textarea = styled.textarea`
   width:100%;
   display:block;
   border-radius: 8px;
   resize: none;
   text-indent: 12px;
   border: 1px solid ${color.primary};
   padding-top: 5px;
`

const InputBox = styled.div`
   width:25%;
   float: left;
   padding:5px
`

const Description = styled.div`
   width:100%;
   height:auto;
   font-size: 10px;
   padding: 5px 0 7px 7px;
   color: ${ color.medium };
`

const Title = styled.div`
   padding-left:5px;
   margin:5px 0 5px 0
`

const Error = styled.div`
   width:auto;
   height:auto;
   color:red;
   font-size: 12px;
   padding-left:7px;
   margin-top: 7px;
`

export const Field = (props) => { 
   let FieldType;
   switch(props.type){
      case 'text':
      case 'password':
      case 'email':
         FieldType = <Input type={props.type} placeholder={props.placeholder} defaultValue={props.value} onChange={props.onChange} {...props} />;
         break; 
      case 'textarea':
         FieldType = <Textarea rows='5'  {...props}/>;
         break;
   } 
   return (
         <InputBox>
         { props.label ? <Title>{props.label}</Title> : null}
         <Description>{ props.description ? props.description : '' }</Description>
         {FieldType}
         {/* { props.type === 'textarea' ? <Textarea rows='5'  {...props}/> : <Input type={props.type} placeholder={props.placeholder} defaultValue={props.value} onChange={props.onChange} {...props} />} */}
         <Error>{ props.error ? props.errorMessage : '' }</Error>      
      </InputBox>   
   )
};

Field.propTypes = {
   type : PropTypes.oneOf(['text', 'textarea', 'password', 'email']).isRequired,
   label : PropTypes.string.isRequired,
   description : PropTypes.string.isRequired,
   error : PropTypes.bool,
   errorMessage: string,
   placeholder : PropTypes.string,
   onChange : PropTypes.func,
   value : PropTypes.string,
   success : PropTypes.bool,
};

Field.defaultProps = {
   type : 'text',
   error : false,
   success : false
};



