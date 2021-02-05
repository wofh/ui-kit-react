import React from 'react';
import { Box } from '../Box';
import { Skeleton } from './Skeleton';
import { Heading } from '../Heading';
import { Text } from '../Text';

export default {
   title: 'Components/Skeleton',
   component: Skeleton,
};

export const Default = () => (
   <Box pad={'xsmall'}>
      <Box pad={'xsmall'}>
         <Skeleton circle={true} w={100} h={100} />
      </Box>
      <Box pad={'xsmall'}>
         <Heading size={'xxlarge'}><Skeleton /></Heading>
      </Box>
      <Box pad={'xsmall'}>
         <Text><Skeleton count={4} /></Text>
      </Box>
   </Box>
);

export const SingleLine = () => (
   <Box pad={'xsmall'}>
      <Skeleton />
   </Box>
);

export const MultipleLines = () => (
   <Box pad={'xsmall'}>
      <Skeleton count={5} />
   </Box>
);

export const Circle = () => (
   <Box pad={'xsmall'}>
      <Skeleton circle={true} w={150} h={150} />
   </Box>
);

export const Rectangle = () => (
   <Box pad={'xsmall'}>
      <Skeleton w={150} h={200} />
   </Box>
);

export const Duration = () => (
   <Box pad={'xsmall'}>
      <Skeleton duration={3} />
   </Box>
);
