import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../shared/styles';

const Input = styled.input`
   width:100%;
   height:32px;
   display:block;
   border:solid 1px;
   border-radius:8px;
   text-indent:12px;
   border: 1px solid ${props => colorByStates[props.state]};
   color:${props => colorByStates[props.state]};
   &::-webkit-input-placeholder {
      color:${props => colorByStates[props.state]};
   }
`


const colorByStates = {
   normal: color.medium,
   active: color.primary,
   error: color.danger,
   success: color.success,
   medium: color.medium
}

const Textarea = styled.textarea`
   width:100%;
   display:block;
   border-radius: 8px;
   resize: none;
   text-indent: 12px;
   border: 1px solid ${props => colorByStates[props.state]};
   &::-webkit-input-placeholder {
      line-height: 27px;
      color:black;
   };
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
   return (
      <InputBox >
         <Title>{ props.label }</Title>
         <Description>{ props.description }</Description>
         { props.type === 'textarea' ? <Textarea rows='5'  {...props}/> : <Input type={props.type} placeholder={props.placeholder} defaultValue={props.value} onChange={props.onChange} {...props} />}
         <Error>{ props.error }</Error>
      </InputBox>
   )
};

Field.propTypes = {
   type : PropTypes.oneOf(['text', 'textarea', 'password', 'email']),
   label : PropTypes.string,
   description : PropTypes.string,
   error : PropTypes.string,
   placeholder : PropTypes.string,
   onChange : PropTypes.func,
   value : PropTypes.string,
   state : PropTypes.oneOf(['normal', 'active', 'error', 'success']),
};

Field.defaultProps = {
   type : 'text',
   state : 'normal',
};



