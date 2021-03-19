import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Field } from './Field';
import { Input } from './Input';
import { Password } from './Password';
import { Email } from './Email';
import { Textarea } from './Textarea';
import { Select } from './Select';
import { Datepicker } from './Datepicker';
import { Filepicker } from './Filepicker';
import { Checkbox } from './Checkbox';
import { Number } from './Number';

export default {
   title: 'Components/Field',
   component: Field,
   subcomponents: {
      Input,
      Email,
      Password,
      Number,
      Textarea,
      Select,
      Datepicker,
      Filepicker,
      Checkbox,
   },
};

const placeholder = 'Placeholder text';
const description = 'Field description text';
const long_description = 'Nunc iaculis enim ac massa vulputate condimentum fusce imperdiet sit';
const selectOptions = [
   { name: 'Yoga', value: 'yoga' },
   { name: 'Pilates', value: 'pilates' },
   { name: 'Martial Arts', value: 'martial-arts' },
   { name: 'Dance', value: 'dance' },
   { name: 'Meditation (Disabled)', value: 'meditation', disabled: true },
   { name: 'Cross-Fit', value: 'cross-fit' },
];

export const Default = () => (
   <Box pad={'none'}>
      <Field
         spaceAfter={20}
         type={'text'}
         placeholder={placeholder}
         label={'Text'}
         description={description}
         onBlur={console.log}
      />
      <Field
         spaceAfter={20}
         type={'textarea'}
         placeholder={placeholder}
         label={'Textarea'}
         description={description}
         autoResize
      />
      <Field spaceAfter={20} type={'password'} placeholder={placeholder} label={'Password'} />
      <Field
         spaceAfter={20}
         type={'email'}
         placeholder={placeholder}
         label={'Email'}
         description={description}
      />
      <Field
         spaceAfter={20}
         type={'number'}
         placeholder={placeholder}
         label={'Number'}
         description={description}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         options={selectOptions}
         placeholder={placeholder}
         label={'Select'}
         description={description}
      />
      <Field
         spaceAfter={20}
         type={'datepicker'}
         placeholder={placeholder}
         label={'Datepicker'}
         description={description}
         displayFormat={'DD/MM/YYYY'}
      />
      <Field
         spaceAfter={20}
         type={'filepicker'}
         placeholder={placeholder}
         label={'Filepicker'}
         description={description}
      />
      <Field type={'group'} label={'Checkbox'} description={description}>
         <Field
            spaceAfter={10}
            type={'checkbox'}
            label={'Checkbox 1'}
            description={'Checkbox description 1'}
         />
         <Field
            spaceAfter={10}
            type={'checkbox'}
            label={'Checkbox 2'}
            description={'Checkbox description 2'}
            checked
         />
         <Field
            spaceAfter={10}
            type={'checkbox'}
            label={'Checkbox 3'}
            description={'Checkbox description 3'}
            checked
         />
         <Field
            spaceAfter={10}
            type={'checkbox'}
            label={'Checkbox 4'}
            description={'Checkbox description 4'}
         />
         <Field
            spaceAfter={40}
            type={'checkbox'}
            label={'Checkbox 5'}
            description={'Checkbox description 5'}
         />
      </Field>
   </Box>
);

export const FieldType = () => (
   <>
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
         type={'number'}
         placeholder={placeholder}
         label={'Number'}
         description={description}
      />
      <Field
         spaceAfter={20}
         type={'number'}
         plain
         placeholder={placeholder}
         label={'Plain Number'}
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
      <Field
         spaceAfter={20}
         type={'datepicker'}
         placeholder={placeholder}
         label={'Datepicker'}
         description={description}
      />
      <Field type={'group'} label={'Checkbox'} description={description} spaceAfter={20}>
         <Field type={'checkbox'} label={'Checkbox 1'} />
         <Field type={'checkbox'} label={'Checkbox 2'} checked />
         <Field type={'checkbox'} label={'Checkbox 3'} checked />
         <Field type={'checkbox'} label={'Checkbox 4'} />
      </Field>
   </>
);

export const OnlyField = () => (
   <>
      <Field spaceAfter={20} type={'text'} placeholder={'Text'} />
      <Field spaceAfter={20} type={'email'} placeholder={'Email'} />
      <Field spaceAfter={20} type={'password'} placeholder={'Password'} />
      <Field spaceAfter={20} type={'number'} placeholder={'Number'} />
      <Field spaceAfter={20} type={'select'} options={selectOptions} placeholder={'Select'} />
      <Field spaceAfter={20} type={'textarea'} placeholder={'Textarea'} />
      <Field spaceAfter={20} type={'datepicker'} placeholder={'Datepicker'} />
      <Field spaceAfter={20} type={'checkbox'} defaultChecked />
   </>
);

export const InlineField = () => (
   <>
      <Field
         spaceAfter={20}
         type={'text'}
         placeholder={placeholder}
         label={'Text'}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'email'}
         placeholder={placeholder}
         label={'Email'}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'password'}
         placeholder={placeholder}
         label={'Password'}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'number'}
         placeholder={placeholder}
         label={'Number'}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'number'}
         plain
         placeholder={placeholder}
         label={'Plain Number'}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         options={selectOptions}
         placeholder={placeholder}
         label={'Select'}
         onChange={(val) => console.log(val)}
         description={long_description}
         inline={4}
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
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         searchable
         options={selectOptions}
         placeholder={placeholder}
         label={'Searchable Select'}
         onChange={(val) => console.log(val)}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'select'}
         plain
         options={selectOptions}
         placeholder={placeholder}
         label={'Plain Select'}
         onChange={(val) => console.log(val)}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'textarea'}
         placeholder={placeholder}
         label={'Textarea'}
         description={long_description}
         inline={4}
      />
      <Field
         spaceAfter={20}
         type={'datepicker'}
         placeholder={placeholder}
         label={'Datepicker'}
         description={long_description}
         inline={4}
      />
      <Field
         type={'group'}
         label={'Checkbox'}
         description={long_description}
         spaceAfter={20}
         inline={4}
      >
         <Field type={'checkbox'} label={'Checkbox 1'} />
         <Field type={'checkbox'} label={'Checkbox 2'} checked />
         <Field type={'checkbox'} label={'Checkbox 3'} checked />
         <Field type={'checkbox'} label={'Checkbox 4'} />
      </Field>
   </>
);

export const FieldState = () => (
   <>
      <Field
         spaceAfter={20}
         type={'email'}
         placeholder={placeholder}
         label={'Success'}
         description={description}
         success
      />
      <Field
         spaceAfter={20}
         type={'email'}
         placeholder={placeholder}
         label={'Error'}
         description={description}
         error={'This field has some error'}
      />
      <Field
         spaceAfter={20}
         type={'email'}
         placeholder={placeholder}
         label={'Multiple Errors'}
         description={description}
         error={['This field more then one error', 'This is another error']}
      />
   </>
);

export const WithIcons = () => (
   <>
      <Field
         spaceAfter={20}
         type={'text'}
         placeholder={placeholder}
         label={'Search'}
         iconLeft={'search'}
      />
      <Field spaceAfter={20} type={'text'} placeholder={placeholder} error iconRight={'alert'} />
   </>
);

export const Autofocus = () => (
   <Field type={'text'} placeholder={placeholder} label={'Autofocus'} autoFocus />
);

export const FileUpload = () => (
   <>
      <Field
         spaceAfter={20}
         type={'filepicker'}
         label={'File Upload'}
         onUpload={(file, onUploadProgress) => {
            return new Promise((resolve, reject) => {
               fetch('http://localhost/api/v0/upload', {
                  onUploadProgress: onUploadProgress,
                  method: 'POST',
                  headers: {
                     'Content-Type': 'multipart/form-data',
                  },
                  body: file,
               })
                  .then((res) => res.json())
                  .then(resolve)
                  .catch(reject);
            });
         }}
         onUploadError={(error, file) => {
            console.log('error', error, file);
         }}
         onChange={(val) => console.log(val)}
      />
      <Field
         spaceAfter={20}
         type={'filepicker'}
         label={'Single File Upload'}
         onChange={(val) => console.log('update', val)}
      />
      <Field
         spaceAfter={20}
         type={'filepicker'}
         label={'Multiple File Upload'}
         multiple
         onChange={(val) => console.log('update', val)}
      />
   </>
);

export const AsyncSelect = () => (
   <Box pad={'none'} h={440}>
      <Field
         spaceAfter={20}
         type={'select'}
         searchable
         placeholder={'Async Select'}
         debounce={1000}
         preFetchOptions
         fetchOptions={(query, defaultOptions) => {
            return new Promise((resolve, reject) => {
               fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
                  .then((response) => response.json())
                  .then(({ drinks }) => {
                     if (!drinks) {
                        resolve([]);
                     } else {
                        resolve(
                           drinks.map(({ idDrink, strDrink }) => ({
                              value: idDrink,
                              name: strDrink,
                           }))
                        );
                     }
                  })
                  .catch(reject);
            });
         }}
         label={'Async Select'}
         onChange={(val) => console.log(val)}
      />
   </Box>
);

export const FieldPrefixSuffix = () => (
   <>
      <Field
         label={'Prefix'}
         description={'This field has a prefix'}
         prefix={<Button use={'primary'} label={'Prefix Button'} />}
         spaceAfter={20}
      />
      <Field
         label={'Suffix'}
         description={'This field has a suffix'}
         suffix={<Button use={'primary'} label={'Suffix Button'} />}
         spaceAfter={20}
      />
   </>
);

export const Misc = () => (
   <>
      <Field type={'group'} label={'Group Type'} description={description} spaceAfter={40}>
         (This is the group child node) Add a label and description without the actual field. Best
         used with checkbox fields.
      </Field>
      <Field
         type={'none'}
         label={'None Type'}
         description={'Add no field. You can still ad a label and a description.'}
         spaceAfter={40}
      />
   </>
);
