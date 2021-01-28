import React from 'react';
import { Box } from '../Box';
import { Skeleton } from './Skeleton';
import { Heading } from '../Heading';

export default {
   title: 'Components/Skeleton',
   component: Skeleton,
};

export const Default = () => (
   <Box pad={'xsmall'}>
      <Box pad={'xsmall'}>
         <Skeleton circle={true} width={100} height={100} />
      </Box>
      <Box pad={'xsmall'}>
         <Heading size={'xxlarge'}><Skeleton /></Heading>
      </Box>
      <Box pad={'xsmall'}>
         <Skeleton count={4} />
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
      <Skeleton circle={true} width={150} height={150} />
   </Box>
);

export const Rectangle = () => (
   <Box pad={'xsmall'}>
      <Skeleton width={150} height={200} />
   </Box>
);

export const Duration = () => (
   <Box pad={'xsmall'}>
      <Skeleton duration={3} />
   </Box>
);
