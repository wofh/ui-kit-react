import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Text } from './Text';

export default {
   title: 'Components/Text',
   component: Text,
};

export const Default = () => (
   <div>
      <Box pad={'xsmall'}>
         <Text>Default</Text>
      </Box>
   </div>
);

export const Sizes = () => (
   <div>
      <Box pad={'small'}>
         <Text size={'xxlarge'}>Text xxlarge</Text>
      </Box>
      <Box pad={'small'}>
         <Text size={'xlarge'}>Text xlarge</Text>
      </Box>
      <Box pad={'small'}>
         <Text size={'large'}>Text large</Text>
      </Box>
      <Box pad={'small'}>
         <Text size={'medium'}>Text medium</Text>
      </Box>
      <Box pad={'small'}>
         <Text size={'default'}>Text default</Text>
      </Box>
      <Box pad={'small'}>
         <Text size={'small'}>Text small</Text>
      </Box>
      <Box pad={'small'}>
         <Text size={'xsmall'}>Text xsmall</Text>
      </Box>
   </div>
);

export const Color = () => (
   <div>
      <Box pad={'small'}>
         <Text color={'primary'}>Primary color</Text>
      </Box>
      <Box pad={'small'}>
         <Text color={'secondary'}>Secondary color</Text>
      </Box>
      <Box pad={'small'}>
         <Text color={'tertiary'}>Tertiary color</Text>
      </Box>
      <Box pad={'small'}>
         <Text color={'success'}>Success color</Text>
      </Box>
      <Box pad={'small'}>
         <Text color={'danger'}>Danger color</Text>
      </Box>
      <Box pad={'small'}>
         <Text color={'warning'}>Warning color</Text>
      </Box>
      <Box pad={'small'}>
         <Text color={'#00c5e6'}>Custom color</Text>
      </Box>
   </div>
);

export const Weight = () => (
   <div>
      <Box pad={'small'}>
         <Text weight={'regular'}>Regular weight</Text>
      </Box>
      <Box pad={'small'}>
         <Text weight={'medium'}>Medium weight</Text>
      </Box>
      <Box pad={'small'}>
         <Text weight={'semibold'}>Semibold weight</Text>
      </Box>
      <Box pad={'small'}>
         <Text weight={'bold'}>Bold weight</Text>
      </Box>
      <Box pad={'small'}>
         <Text weight={'extrabold'}>Extrabold weight</Text>
      </Box>
      <Box pad={'small'}>
         <Text weight={'black'}>Black weight</Text>
      </Box>
   </div>
);
