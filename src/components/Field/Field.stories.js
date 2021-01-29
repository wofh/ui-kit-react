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
         <Field style={{ margin: '5px', width: 'calc(100% - 10px)' }} type={'text'} placeholder={placeholder[0]} label={'Text'} description={description[0]}/>
         <Field style={{ margin: '5px', width: 'calc(100% - 10px)' }} type={'textarea'} placeholder={placeholder[0]} label={'Textarea'} description={description[0]}/>
         <Field style={{ margin: '5px', width: 'calc(100% - 10px)', marginTop:'22px'}} type={'password'} placeholder={placeholder[0]} description='' error label={'Password'} errorMessage={'Error message'}/>
         <Field style={{ margin: '5px', width: 'calc(100% - 10px)' }} type={'email'} placeholder={placeholder[0]} label={'Email'} success description={description[0]}/>
      </Box>
   </Box>
);