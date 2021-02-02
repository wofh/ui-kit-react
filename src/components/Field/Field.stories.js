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
   margin-bottom:15px;
`;

const type = [
   'text',
   'textarea',
   'password',
   'email'
]

const placeholder = [
   'Your Text',
]

const description = [
   'Alicuam sed tortor a elementum',
]

export const Default = () => (
   <Box pad={'large'}  >
      <H1> Forms </H1>
      <Box >
         <Field  type={'text'} placeholder={placeholder[0]} label={'Text'} description={description[0]}  autoFocus/>
         <Field  type={'textarea'} placeholder={placeholder[0]} label={'Textarea'} description={description[0]} />
         <Field  type={'password'} placeholder={placeholder[0]}  error={'Error Message'} label={'Password'}/>
         <Field  type={'email'} placeholder={placeholder[0]} label={'Email'} success description={description[0]}/>
      </Box>
   </Box>
);

export const Inputs = () => (
   <Box pad={'xsmall'}>
         <Field  type={'text'} placeholder={placeholder[0]} label={'Text'} description={description[0]}  />
<<<<<<< HEAD
         <Field type={'text'} placeholder={placeholder[0]} label={'Text'} description={description[0]} autoFocus />
=======
         <Field  type={'text'} placeholder={placeholder[0]} label={'Text'} description={description[0]}  autoFocus/>
>>>>>>> 62059ab13dfbd26e3a3f062a3181f106e854b3d1
   </Box>
)

export const TextArea = () => (
   <Box pad={'medium'}>
          <Field  type={'textarea'} placeholder={placeholder[0]} label={'Textarea'} description={description[0]} />
   </Box>
)

export const PasswordInput = () => (
   <Box pad={'large'}>
         <Field  type={'password'} placeholder={placeholder[0]}  error={'Error Message'} label={'Password'}/>
   </Box>
)
export const SuccesInput = () => (
   <Box pad={'large'}>
          <Field  type={'email'} placeholder={placeholder[0]} label={'Email'} success description={description[0]}/>
   </Box>
)