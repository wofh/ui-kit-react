import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import defaultTheme from '../../shared/theme'

/**
 * Theme support is provided via our own `<ThemeProvider>` component which gives you the ability to create your own theme
 */
export const ThemeProvider = ({ theme, children }) => {
	return (
		<ThemeProviderStyled theme={theme}>
			{children}
		</ThemeProviderStyled>
	)
}

ThemeProvider.propTypes = {
	theme: PropTypes.object,
}

ThemeProvider.defaultProps = {
	theme: defaultTheme
}