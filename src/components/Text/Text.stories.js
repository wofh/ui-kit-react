import React from 'react';
import { action } from '@storybook/addon-actions'
import { Box } from '../Box'
import { Text } from './Text'

export default {
	title: 'Text',
	component: Text,
};

export const Default = () => (
	<div>
		<Box pad={'xsmall'}>
			<Text>Default</Text>
		</Box>
	</div>
);

export const Sizes = () => (
	<div>
		<Box pad={'xsmall'}>
			<Text size={'xxlarge'}>Text xxlarge</Text>
		</Box>
		<Box pad={'xsmall'}>
			<Text size={'xlarge'}>Text xlarge</Text>
		</Box>
		<Box pad={'xsmall'}>
			<Text size={'large'}>Text large</Text>
		</Box>
		<Box pad={'xsmall'}>
			<Text size={'medium'}>Text medium</Text>
		</Box>
		<Box pad={'xsmall'}>
			<Text size={'small'}>Text small</Text>
		</Box>
		<Box pad={'xsmall'}>
			<Text size={'xsmall'}>Text xsmall</Text>
		</Box>
	</div>
);