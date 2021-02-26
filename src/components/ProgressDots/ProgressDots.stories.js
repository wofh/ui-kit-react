import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { ProgressDots } from './ProgressDots';

export default {
   title: 'Components/ProgressDots',
   component: ProgressDots,
};

export const Default = () => <ProgressDots isLoading />;

export const Sizes = () => (
   <>
      <Box>
         <ProgressDots size={'large'} />
      </Box>
      <Box>
         <ProgressDots size={'medium'} />
      </Box>
      <Box>
         <ProgressDots size={'small'} />
      </Box>
   </>
);

export const Steps = () => (
   <>
      <Box>
         <ProgressDots size={'medium'} steps={5} />
      </Box>
      <Box>
         <ProgressDots size={'medium'} steps={5} progress={1} />
      </Box>
      <Box>
         <ProgressDots size={'medium'} steps={5} progress={3} />
      </Box>
      <Box>
         <ProgressDots size={'medium'} steps={5} progress={5} />
      </Box>
   </>
);
