import React from 'react';
import { Box } from '../Box'
import { Field } from '../Field'
import { Card } from './Card'

export default {
	title: 'Components/Card',
	component: Card,
};

export const Default = () => (
	<div>
		<Box pad={'xsmall'}>
			<Card header={'Account Details'} footer={'Card Footer'}>
				<Field spaceAfter={20} type={'text'} placeholder={'First Name'} label={'First Name'} />
				<Field spaceAfter={20} type={'email'} placeholder={'Last Name'} label={'Last Name'} />
				<Field spaceAfter={20} type={'email'} placeholder={'Email'} label={'Email'} />
				<Field spaceAfter={20} type={'textarea'} placeholder={'Description'} label={'Description'} />
			</Card>
		</Box>
	</div>
);
