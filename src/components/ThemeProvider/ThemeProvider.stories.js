import React from 'react';
import { action } from '@storybook/addon-actions'
import { Box } from '../Box'
import { Button } from '../Button'
import { ThemeProvider } from './ThemeProvider'

export default {
	title: 'ThemeProvider',
	component: ThemeProvider,
};

const theme = {
	color: {
		primary: '#1DB954'
	}
}

export const Default = () => (
	<div>
		<Box pad={'xsmall'}>
			<ThemeProvider theme={theme}>
				<Button use={'primary'} label={'Button With Custom Primary Color'} />
			</ThemeProvider>
		</Box>
	</div>
);