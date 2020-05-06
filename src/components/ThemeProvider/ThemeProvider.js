import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

import { deepMerge } from '../../utils/object';
import defaultTheme from '../../shared/theme';

/**
 * Theme support is provided via our own `<ThemeProvider>` component. Just wrap the entire application into `<ThemeProvider>` and pass your own custom theme using `theme` prop.
 */
export const ThemeProvider = ({ theme, children }) => {
   return (
      <ThemeProviderStyled theme={deepMerge(defaultTheme, theme || {})}>
         {children}
      </ThemeProviderStyled>
   );
};

ThemeProvider.propTypes = {
   theme: PropTypes.object,
};

ThemeProvider.defaultProps = {
   theme: defaultTheme,
};
