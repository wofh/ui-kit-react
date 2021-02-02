import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Button } from '../Button';
import { ThemeProvider } from './ThemeProvider';

export default {
  title: 'Others/ThemeProvider',
  component: ThemeProvider,
};

const theme = {
  color: {
    primary: '#1DB954',
    secondary: '#F4B400',
  },
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Box pad={'xsmall'}>
      <Button use={'primary'} label={'Custom Primary Color'} />
    </Box>
    <Box pad={'xsmall'}>
      <Button use={'secondary'} label={'Custom Secondary Color'} />
    </Box>
  </ThemeProvider>
);
