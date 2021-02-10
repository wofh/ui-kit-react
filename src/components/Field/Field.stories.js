import React from 'react';
import { Box } from '../Box';
import { Field } from './Field';
import { Input } from './Input';
import { Password } from './Password';
import { Email } from './Email';
import { Textarea } from './Textarea';
import { Select } from './Select';

export default {
   title: 'Components/Field',
   component: Field,
   subcomponents: { Input, Email, Password, Textarea, Select },
};

const placeholder = 'Placeholder text'
const description = 'Field description text'
const selectOptions = [
   { name: 'Yoga', value: 'yoga' },
   { name: 'Pilates', value: 'pilates' },
   { name: 'Martial Arts', value: 'martial-arts' },
   { name: 'Dance', value: 'dance' },
   { name: 'Meditation', value: 'meditation', disabled: true },
   { name: 'Cross-Fit', value: 'cross-fit' },
]

export const Default = () => (
   <Box pad={'xsmall'}  >
      <Box >
         <Field spaceAfter={20} type={'text'} placeholder={placeholder} label={'Text'} description={description} />
         <Field spaceAfter={20} type={'textarea'} placeholder={placeholder} label={'Textarea'} description={description} autoResize />
         <Field spaceAfter={20} type={'password'} placeholder={placeholder} error={'Error Message'} label={'Password'} />
         <Field spaceAfter={20} type={'email'} placeholder={placeholder} label={'Email'} success description={description} />
         <Field spaceAfter={60} type={'select'} options={selectOptions} placeholder={placeholder} label={'Select'} description={description} />
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

export const SelectTypes = () => (
   <Box pad={'xsmall'}  >
      <Box >
         <Field spaceAfter={20} type={'select'} options={selectOptions} placeholder={placeholder} label={'Select'} onChange={(e) => console.log(e)} />
         <Field spaceAfter={20} multiSelect closeOnSelect={false} type={'select'} options={selectOptions} placeholder={placeholder} label={'Multi Select'} onChange={(e) => console.log(e)} />
         <Field spaceAfter={20} plain type={'select'} options={selectOptions} placeholder={placeholder} label={'Plain Select'} onChange={(e) => console.log(e)} />
      </Box>
   </Box>
);