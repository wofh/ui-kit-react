import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Heading } from './Heading';

export default {
   title: 'Heading',
   component: Heading,
};

export const Default = () => (
   <div>
      <Box pad={'xsmall'}>
         <Heading>Default</Heading>
      </Box>
   </div>
);

export const Types = () => (
   <div>
      <Box pad={'small'}>
         <Heading as={'h1'} type={'title'}>
            Title
         </Heading>
         <Heading as={'h2'} type={'subtitle'}>
            Subtitle
         </Heading>
      </Box>
      <Box pad={'small'}>
         <Heading as={'h1'} type={'h1'}>
            Heading 1
         </Heading>
      </Box>
      <Box pad={'small'}>
         <Heading as={'h2'} type={'h2'}>
            Heading 2
         </Heading>
      </Box>
      <Box pad={'small'}>
         <Heading as={'h3'} type={'h3'}>
            Heading 3
         </Heading>
      </Box>
      <Box pad={'small'}>
         <Heading as={'h4'} type={'h4'}>
            Heading 4
         </Heading>
      </Box>
      <Box pad={'small'}>
         <Heading as={'h5'} type={'h5'}>
            Heading 5
         </Heading>
      </Box>
      <Box pad={'small'}>
         <Heading as={'h6'} type={'h6'}>
            Heading 6
         </Heading>
      </Box>
      <Box pad={'small'}>
         <Heading as={'div'} type={'div'}>
            Heading div
         </Heading>
      </Box>
   </div>
);

export const SpaceAfter = () => (
   <div>
      <Box pad={'xsmall'}>
         <Heading as={'h1'} type={'title'} spaceAfter={'medium'}>
            Title with space after
         </Heading>
      </Box>
      <Box pad={'xsmall'}>
         <Heading as={'h2'} type={'subtitle'}>
            Subtitle
         </Heading>
      </Box>
   </div>
);
