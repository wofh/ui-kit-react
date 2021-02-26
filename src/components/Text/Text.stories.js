import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Text } from './Text';

export default {
   title: 'Components/Text',
   component: Text,
};

export const Default = () => <Text>Default</Text>;

export const Sizes = () => (
   <>
      <Box>
         <Text size={'xxlarge'}>Text xxlarge</Text>
      </Box>
      <Box>
         <Text size={'xlarge'}>Text xlarge</Text>
      </Box>
      <Box>
         <Text size={'large'}>Text large</Text>
      </Box>
      <Box>
         <Text size={'medium'}>Text medium</Text>
      </Box>
      <Box>
         <Text size={'default'}>Text default</Text>
      </Box>
      <Box>
         <Text size={'small'}>Text small</Text>
      </Box>
      <Box>
         <Text size={'xsmall'}>Text xsmall</Text>
      </Box>
   </>
);

export const Color = () => (
   <>
      <Box>
         <Text color={'primary'}>Primary color</Text>
      </Box>
      <Box>
         <Text color={'secondary'}>Secondary color</Text>
      </Box>
      <Box>
         <Text color={'tertiary'}>Tertiary color</Text>
      </Box>
      <Box>
         <Text color={'success'}>Success color</Text>
      </Box>
      <Box>
         <Text color={'danger'}>Danger color</Text>
      </Box>
      <Box>
         <Text color={'warning'}>Warning color</Text>
      </Box>
      <Box>
         <Text color={'#00c5e6'}>Custom color</Text>
      </Box>
   </>
);

export const Weight = () => (
   <>
      <Box>
         <Text weight={'regular'}>Regular weight</Text>
      </Box>
      <Box>
         <Text weight={'medium'}>Medium weight</Text>
      </Box>
      <Box>
         <Text weight={'semibold'}>Semibold weight</Text>
      </Box>
      <Box>
         <Text weight={'bold'}>Bold weight</Text>
      </Box>
      <Box>
         <Text weight={'extrabold'}>Extrabold weight</Text>
      </Box>
      <Box>
         <Text weight={'black'}>Black weight</Text>
      </Box>
   </>
);
