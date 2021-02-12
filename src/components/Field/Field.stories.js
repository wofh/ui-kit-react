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

const placeholder = 'Placeholder text';
const description = 'Field description text';
const selectOptions = [
   { name: 'Yoga', value: 'yoga' },
   { name: 'Pilates', value: 'pilates' },
   { name: 'Martial Arts', value: 'martial-arts' },
   { name: 'Dance', value: 'dance' },
   { name: 'Meditation (Disabled)', value: 'meditation', disabled: true },
   { name: 'Cross-Fit', value: 'cross-fit' },
];

export const Default = () => (
   <Box pad={'xsmall'}>
      <Box>
         <Field
            spaceAfter={20}
            type={'text'}
            placeholder={placeholder}
            label={'Text'}
            description={description}
         />
         <Field
            spaceAfter={20}
            type={'textarea'}
            placeholder={placeholder}
            label={'Textarea'}
            description={description}
            autoResize
         />
         <Field
            spaceAfter={20}
            type={'password'}
            placeholder={placeholder}
            error={'Error Message'}
            label={'Password'}
         />
         <Field
            spaceAfter={20}
            type={'email'}
            placeholder={placeholder}
            label={'Email'}
            success
            description={description}
         />
         <Field
            spaceAfter={60}
            type={'select'}
            options={selectOptions}
            placeholder={placeholder}
            label={'Select'}
            description={description}
         />
      </Box>
   </Box>
);

export const FieldType = () => (
   <Box pad={'xsmall'}>
      <Field
         spaceAfter={20}
         type={'text'}
         placeholder={placeholder}
         label={'Text'}
         description={description}
      />
      <Field
         spaceAfter={20}
         type={'email'}
         placeholder={placeholder}
         label={'Email'}
         description={description}
      />
      <Field
         spaceAfter={20}
         type={'password'}
         placeholder={placeholder}
         label={'Password'}
         description={description}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         options={selectOptions}
         placeholder={placeholder}
         label={'Select'}
         onChange={(val) => console.log(val)}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         multiSelect
         closeOnSelect={false}
         options={selectOptions}
         placeholder={placeholder}
         label={'Multi Select'}
         onChange={(val) => console.log(val)}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         searchable
         options={selectOptions}
         placeholder={placeholder}
         label={'Searchable Select'}
         onChange={(val) => console.log(val)}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         plain
         options={selectOptions}
         placeholder={placeholder}
         label={'Plain Select'}
         onChange={(val) => console.log(val)}
      />
      <Field
         spaceAfter={20}
         type={'textarea'}
         placeholder={placeholder}
         label={'Textarea'}
         description={description}
      />
   </Box>
);

export const OnlyField = () => (
   <Box>
      <Field spaceAfter={20} type={'text'} placeholder={'Text'} />
      <Field spaceAfter={20} type={'email'} placeholder={'Email'} />
      <Field spaceAfter={20} type={'password'} placeholder={'Password'} />
      <Field spaceAfter={20} type={'select'} options={selectOptions} placeholder={'Select'} />
      <Field spaceAfter={20} type={'textarea'} placeholder={'Textarea'} />
   </Box>
);

export const FieldState = () => (
   <>
      <Box>
         <Field
            spaceAfter={20}
            type={'email'}
            placeholder={placeholder}
            label={'Success'}
            description={description}
            success
         />
      </Box>
      <Box>
         <Field
            spaceAfter={20}
            type={'email'}
            placeholder={placeholder}
            label={'Error'}
            description={description}
            error={'This field has some error'}
         />
      </Box>
   </>
);

export const WithIcons = () => (
   <>
      <Box>
         <Field
            spaceAfter={20}
            type={'text'}
            placeholder={placeholder}
            label={'Search'}
            iconLeft={'search'}
         />
         <Field spaceAfter={20} type={'text'} placeholder={placeholder} error iconRight={'alert'} />
      </Box>
   </>
);

export const Autofocus = () => (
   <>
      <Box>
         <Field type={'text'} placeholder={placeholder} label={'Autofocus'} autoFocus />
      </Box>
   </>
);
