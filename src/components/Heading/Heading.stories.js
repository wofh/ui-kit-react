import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Heading } from './Heading';

export default {
   title: 'Components/Heading',
   component: Heading,
};

export const Default = () => (
   <>
      <Box>
         <Heading>Default</Heading>
      </Box>
      <Box>
         <Heading size={'xxlarge'}>Title</Heading>
         <Heading size={'medium'}>Subtitle</Heading>
      </Box>
   </>
);

export const Sizes = () => (
   <>
      <Box>
         <Heading as={'h1'} size={'xxlarge'}>
            H1 tag xxlarge
         </Heading>
         <Heading size={'xxlarge'}>Div tag xxlarge</Heading>
      </Box>
      <Box>
         <Heading as={'h2'} size={'xlarge'}>
            H2 tag xlarge
         </Heading>
         <Heading size={'xlarge'}>Div tag xlarge</Heading>
      </Box>
      <Box>
         <Heading as={'h3'} size={'large'}>
            H3 tag large
         </Heading>
         <Heading size={'large'}>Div tag large</Heading>
      </Box>
      <Box>
         <Heading as={'h4'} size={'medium'}>
            H4 tag medium
         </Heading>
         <Heading size={'medium'}>Div tag medium</Heading>
      </Box>
      <Box>
         <Heading as={'h5'} size={'small'}>
            H5 tag small
         </Heading>
         <Heading size={'small'}>Div tag small</Heading>
      </Box>
      <Box>
         <Heading as={'h6'} size={'xsmall'}>
            H6 tag xsmall
         </Heading>
         <Heading size={'xsmall'}>Div tag xsmall</Heading>
      </Box>
   </>
);

export const SpaceAfter = () => (
   <>
      <Box>
         <Heading as={'h1'} size={'medium'} spaceAfter={'none'}>
            Title with no space after
         </Heading>
         <Heading as={'h2'} size={'medium'}>
            Subtitle
         </Heading>
      </Box>
      <Box>
         <Heading as={'h1'} size={'medium'} spaceAfter={'xsmall'}>
            Title with xsmall space after
         </Heading>
         <Heading as={'h2'} size={'medium'}>
            Subtitle
         </Heading>
      </Box>
      <Box>
         <Heading as={'h1'} size={'medium'} spaceAfter={'small'}>
            Title with small space after
         </Heading>
         <Heading as={'h2'} size={'medium'}>
            Subtitle
         </Heading>
      </Box>
      <Box>
         <Heading as={'h1'} size={'medium'} spaceAfter={'medium'}>
            Title with medium space after
         </Heading>
         <Heading as={'h2'} size={'medium'}>
            Subtitle
         </Heading>
      </Box>
      <Box>
         <Heading as={'h1'} size={'medium'} spaceAfter={'large'}>
            Title with large space after
         </Heading>
         <Heading as={'h2'} size={'medium'}>
            Subtitle
         </Heading>
      </Box>
   </>
);
