import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { Field } from './Field';

export default {
   title: 'Field',
   component: Field,
};


const H1 = styled.h1`
   margin-left:15px;
   margin-bottom:15px
`

const type = [
   'text',
   'textarea',
   'password',
   'email'
]

const states = [
   'normal',
   'active',
   'error',
   'success',
]

const placeholder = [
   'Your Text'
]

const description = [
   'Alicuam sed tortor a elementum'
]


export const Default = () => (
   <Box pad={'large'}  >
      <H1> Forms </H1>
      <Box >
         <Field style={{ margin: '5px ', width: 'calc(100% - 10px)'  }} type={'text'} placeholder={placeholder[0]} label={'Text'}  state={states[0]} description={description[0]}/>
         <Field style={{ margin: '5px ', width: 'calc(100% - 10px)' }} type={'textarea'} placeholder={placeholder[0]} label={'Textarea'} state={states[1]} description={description[0]}/>
         <Field style={{ margin:'5px', marginTop:'22px', width: 'calc(100% - 10px)' }} type={'password'} placeholder={placeholder[0]} label={'Password'} state={states[2]}  error={'Error message'}/>
         <Field style={{ margin: '5px', width: 'calc(100% - 10px)' }} type={'email'} placeholder={placeholder[0]} label={'Email'} state={states[3]} description={description[0]}/>
      </Box>
   </Box>
);