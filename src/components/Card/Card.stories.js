import React from 'react';
import { Box } from '../Box'
import { Field } from '../Field'
import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'

export default {
	title: 'Components/Card',
	component: Card,
	subcomponents: { CardHeader, CardContent, CardFooter }
};

const content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

export const Default = () => (
	<Box pad={'xsmall'}>
		<Card>
			<CardHeader>Account Details</CardHeader>
			<CardContent>{content}</CardContent>
			<CardFooter>Card Footer</CardFooter>
		</Card>
	</Box>
);

export const DefaultVariant = () => (
	<Box pad={'xsmall'}>
		<Card header={'Account Details'} footer={'Card Footer'}>
			{content}
		</Card>
	</Box>
);
