import React from 'react';
import { Box } from '../Box';
import { Field } from './Field';

export default {
   title: 'Field',
   component: Field,
};

const placeholder = 'Placeholder text'
const description = 'Field description text'

export const Default = () => (
   <Box pad={'xsmall'}  >
      <Box >
         <Field spaceAfter={20} type={'text'} placeholder={placeholder} label={'Text'} description={description}/>
         <Field spaceAfter={20} type={'textarea'} placeholder={placeholder} label={'Textarea'} description={description} />
         <Field spaceAfter={20} type={'password'} placeholder={placeholder} error={'Error Message'} label={'Password'}/>
         <Field spaceAfter={20} type={'email'} placeholder={placeholder} label={'Email'} success description={description}/>
      </Box>
   </Box>
);

export const FieldType = () => (
   <Box pad={'xsmall'}>
      <Field spaceAfter={20} type={'text'} placeholder={placeholder} label={'Text'} description={description} />
      <Field spaceAfter={20} type={'email'} placeholder={placeholder} label={'Email'} description={description} />
      <Field spaceAfter={20} type={'textarea'} placeholder={placeholder} label={'Textarea'} description={description} />
      <Field spaceAfter={20} type={'password'} placeholder={placeholder} label={'Password'} description={description} />
   </Box>
)

export const OnlyField = () => (
   <Box>
      <Field spaceAfter={20} type={'text'} placeholder={'Text'} />
      <Field spaceAfter={20} type={'email'} placeholder={'Email'} />
      <Field spaceAfter={20} type={'textarea'} placeholder={'Textarea'} />
      <Field spaceAfter={20} type={'password'} placeholder={'Password'} />
   </Box>
)

export const FieldState = () => (
   <>
      <Box>
         <Field spaceAfter={20} type={'email'} placeholder={placeholder} label={'Success'} description={description} success />
      </Box>
      <Box>
         <Field spaceAfter={20} type={'email'} placeholder={placeholder} label={'Error'} description={description} error={'This field has some error'} />
      </Box>
   </>
)

export const WithIcons = () => (
   <>
      <Box>
         <Field spaceAfter={20} type={'text'} placeholder={placeholder} label={'Search'} iconLeft={'search'} />
         <Field spaceAfter={20} type={'text'} placeholder={placeholder} error iconRight={'alert'} />
      </Box>
   </>
)

export const Autofocus = () => (
   <>
      <Box>
         <Field type={'text'} placeholder={placeholder} label={'Autofocus'} autoFocus />
      </Box>
   </>
)