import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { ProgressDots } from './ProgressDots';

export default {
  title: 'Components/ProgressDots',
  component: ProgressDots,
};

export const Default = () => (
  <Box pad={'xsmall'}>
    <ProgressDots isLoading />
  </Box>
);

export const Sizes = () => (
  <div>
    <Box pad={'medium'}>
      <ProgressDots size={'large'} />
    </Box>
    <Box pad={'medium'}>
      <ProgressDots size={'medium'} />
    </Box>
    <Box pad={'medium'}>
      <ProgressDots size={'small'} />
    </Box>
  </div>
);

export const Steps = () => (
  <div>
    <Box pad={'medium'}>
      <ProgressDots size={'medium'} steps={5} />
    </Box>
    <Box pad={'medium'}>
      <ProgressDots size={'medium'} steps={5} progress={1} />
    </Box>
    <Box pad={'medium'}>
      <ProgressDots size={'medium'} steps={5} progress={3} />
    </Box>
    <Box pad={'medium'}>
      <ProgressDots size={'medium'} steps={5} progress={5} />
    </Box>
  </div>
);
