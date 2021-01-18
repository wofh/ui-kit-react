import React from 'react';
import { action } from '@storybook/addon-actions'
import { Box } from '../Box'
import { Brand } from './Brand'

export default {
	title: 'Brand',
	component: Brand,
};

const src = 'https://uploads-ssl.webflow.com/5fd784b39b6ceb5691ca7150/5ffd679d91eb0a8394743fab_Group%2030.svg'

export const Default = () => (
	<Box pad={'xsmall'}>
		<Brand src={src} />
	</Box>
);