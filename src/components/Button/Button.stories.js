import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Button } from './Button';

export default {
   title: 'Components/Button',
   component: Button,
};

export const Default = () => (
   <div>
      <Box pad={'xsmall'}>
         <Button onClick={action('clicked')} label={'Default'} />
      </Box>
   </div>
);

export const Uses = () => (
   <div>
      <Box pad={'xsmall'}>
         <Button use={'primary'} label={'Primary'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button use={'secondary'} label={'Secondary'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button use={'tertiary'} label={'Tertiary'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button use={'danger'} label={'Danger'} />
      </Box>
   </div>
);

export const Sizes = () => (
   <div>
      <Box pad={'xsmall'}>
         <Button size={'tiny'} label={'Tiny'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button size={'small'} label={'Small'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button size={'default'} label={'Default'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button size={'medium'} label={'Medium'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button size={'large'} label={'Large'} />
      </Box>
   </div>
);

export const WithIcons = () => (
   <div>
      <Box pad={'xsmall'}>
         <Button iconLeft={'check'} use={'primary'} label={'Save'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button iconRight={'arrowright'} use={'primary'} label={'Continue to payment'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button iconLeft={'add'} label={'Add item'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button iconRight={'arrowright'} label={'Explore'} />
      </Box>
   </div>
);

export const Loading = () => (
   <div>
      <Box pad={'xsmall'}>
         <Button size={'medium'} use={'primary'} isLoading={true} label={'Default Loading'} />
      </Box>
      <Box pad={'xsmall'}>
         <Button
            size={'medium'}
            use={'primary'}
            isLoading={true}
            loadingText={'Custom Loading Text...'}
         />
      </Box>
   </div>
);

export const FullWidth = () => (
   <div>
      <Box pad={'xsmall'}>
         <Button fullWidth use={'primary'} label={'Full Width Button'} />
      </Box>
   </div>
);
