import React from 'react';
import { addDecorator } from '@storybook/react';
import { loadFonts } from '../src/utils';
import { GlobalStyle } from '../src/shared/theme';

addDecorator((story) => (
  <div>
    <GlobalStyle />
    {story()}
  </div>
));

loadFonts();
