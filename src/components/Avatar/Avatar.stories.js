import React from 'react';
import { action } from '@storybook/addon-actions'
import Box from '../Box'
import Avatar from './Avatar'

export default {
	title: 'Avatar',
	component: Avatar,
};

const src = [
	'https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg',
	'https://images-na.ssl-images-amazon.com/images/M/MV5BMDc2M2NkMTctNmQ0MS00MjQxLWFkMGItNGY1Y2Y3NzYzZjg1XkEyXkFqcGdeQXVyNjAzMTgxNjY@._V1_UY256_CR74,0,172,256_AL_.jpg',
	'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
	'https://randomuser.me/api/portraits/men/32.jpg',
]

export const Default = () => (
	<Box pad={'xsmall'}>
		<Avatar />
		<Avatar src={src[0]} />
	</Box>
);

export const Loading = () => (
	<Box pad={'xsmall'}>
		<Avatar isLoading />
	</Box>
);

export const Initial = () => (
	<Box pad={'xsmall'}>
		<Avatar name={'Stefano'} />
	</Box>
);

export const Sizes = () => (
	<div>
		<Box pad={'xsmall'}>
			<Avatar src={src[0]} size={'large'} />
		</Box>
		<Box pad={'xsmall'}>
			<Avatar src={src[1]} size={'medium'} />
		</Box>
		<Box pad={'xsmall'}>
			<Avatar src={src[2]} size={'small'} />
		</Box>
		<Box pad={'xsmall'}>
			<Avatar src={src[3]} size={'tiny'} />
		</Box>
	</div>
);