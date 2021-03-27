import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Badge } from './Badge';

export default {
   title: 'Components/Badge',
   component: Badge,
};

export const Default = () => <Badge onClick={action('clicked')} label={'Default'} />;

export const Uses = () => (
   <>
      <Box pad={'xsmall'}>
         <Badge use={'primary'} label={'Primary'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'secondary'} label={'Secondary'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'tertiary'} label={'Tertiary'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'success'} label={'Success'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'danger'} label={'Danger'} />
      </Box>
   </>
);

export const Sizes = () => (
   <>
      <Box pad={'xsmall'}>
         <Badge size={'default'} label={'Default'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge size={'tiny'} label={'Tiny'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge size={'small'} label={'Small'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge size={'medium'} label={'Medium'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge size={'large'} label={'Large'} />
      </Box>
   </>
);

export const WithIcons = () => (
   <>
      <Box pad={'xsmall'}>
         <Badge iconLeft={'check'} use={'primary'} label={'Saved'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge iconRight={'check'} use={'success'} label={'Done'} />
      </Box>
      <Box pad={'xsmall'}>
         <Badge icon={'check'} />
      </Box>
   </>
);

export const SemiTransparent = () => (
   <>
      <Box pad={'xsmall'}>
         <Badge use={'primary'} label={'Primary'} semiTransparent />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'secondary'} label={'Secondary'} semiTransparent />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'tertiary'} label={'Tertiary'} semiTransparent />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'success'} label={'Success'} semiTransparent />
      </Box>
      <Box pad={'xsmall'}>
         <Badge use={'danger'} label={'Danger'} semiTransparent />
      </Box>
   </>
);