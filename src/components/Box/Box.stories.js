import React from 'react';
import { Box } from './Box'

export default {
	title: 'Box',
	component: Box,
};

export const Default = () => (
	<div>
		<Box pad={'xsmall'}>
			<Box>Default Box</Box>
		</Box>
	</div>
);

export const Padding = () => (
	<div>
		<Box pad={'xsmall'}>
			<Box pad={'xsmall'} background={'#EEE'}>Extra Small Padding</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box pad={'small'} background={'#EEE'}>Small Padding</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box pad={'medium'} background={'#EEE'}>Medium Padding</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box pad={'large'} background={'#EEE'}>Large Padding</Box>
		</Box>
	</div>
);

export const Height = () => (
	<div>
		<Box pad={'xsmall'}>
			<Box height={'100px'} background={'#EEE'}>Height 100px</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box height={{min: '150px', max: '250px'}} background={'#EEE'}>Min/Max Height Object</Box>
		</Box>
	</div>
);

export const Background = () => (
	<div>
		<Box pad={'xsmall'}>
			<Box background={'primary'}>Primary Background</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box background={'secondary'}>Secondary Background</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box background={'tertiary'}>Tertiary Background</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box background={'danger'}>Danger Background</Box>
		</Box>
		<Box pad={'xsmall'}>
			<Box background={'#EEE'}>Custom HEX Background</Box>
		</Box>
	</div>
);
