import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Button } from './Button';

export default {
   title: 'Components/Button',
   component: Button,
};

export const Default = () => <Button onClick={action('clicked')} label={'Default'} />;

export const Uses = () => (
   <>
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
   </>
);

export const Stroked = () => (
   <>
      <Box pad={'xsmall'}>
         <Button use={'primary'} label={'Primary'} stroked />
      </Box>
      <Box pad={'xsmall'}>
         <Button use={'secondary'} label={'Secondary'} stroked />
      </Box>
      <Box pad={'xsmall'}>
         <Button use={'tertiary'} label={'Tertiary'} stroked />
      </Box>
      <Box pad={'xsmall'}>
         <Button use={'danger'} label={'Danger'} stroked />
      </Box>
   </>
);

export const Sizes = () => (
   <>
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
   </>
);

export const WithIcons = () => (
   <>
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
      <Box pad={'xsmall'}>
         <Button icon={'add'} />
      </Box>
   </>
);

export const Loading = () => (
   <>
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
   </>
);

export const FullWidth = () => <Button fullWidth use={'primary'} label={'Full Width Button'} />;

export const Plain = () => <Button plain label={'Plain Button'} />;
