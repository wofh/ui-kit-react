import React from 'react';
import { action } from '@storybook/addon-actions'
import { Box } from '../Box'
import { Brand } from './Brand'

export default {
	title: 'Brand',
	component: Brand,
};

const src = 'https://cdn.emojics.com/v1.0.0/images/logo.png'

export const Default = () => (
	<Box pad={'xsmall'}>
		<Brand src={src} />
	</Box>
);