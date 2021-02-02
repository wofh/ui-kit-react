import React from 'react';
import { Box } from '../Box'
import { Image } from './Image'

export default {
	title: 'Components/Image',
	component: Image,
};

const src = 'https://uploads-ssl.webflow.com/5fd784b39b6ceb5691ca7150/5fd785ab914b091fb75df46a_masthead-image.png'

export const Default = () => (
	<Box pad={'xsmall'}>
		<Image src={src} />
	</Box>
);