import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { loadFonts } from '../src/utils';
import { GlobalStyle } from '../src/shared/theme';

addDecorator((story) => (
  <div>
    <GlobalStyle />
    {story()}
  </div>
));

loadFonts();

addParameters({
  options: {
    storySort: {
      order: ['Components', 'Others'],
    },
    showRoots: true,
  },
});