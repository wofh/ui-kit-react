import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { deepMerge } from '../../utils/object';
import defaultTheme from '../../shared/theme';

const useTheme = () => {
   return deepMerge(defaultTheme, useContext(ThemeContext) || {});
};

export default useTheme;
