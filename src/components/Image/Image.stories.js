import React from 'react';
import Box from '../Box'
import Image from './Image'

export default {
	title: 'Image',
	component: Image,
};

const src = 'https://cdn.emojics.com/v1.0.0/images/logo.png'

export const Default = () => (
	<Box pad={'xsmall'}>
		<Image src={src} />
	</Box>
);