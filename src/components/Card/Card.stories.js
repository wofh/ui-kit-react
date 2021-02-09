import React from 'react';
import { Box } from '../Box'
import { Row, Col } from '../Grid';
import { Card } from './Card'
import { CardHeader } from './CardHeader'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'
import { CardImage } from './CardImage'

export default {
	title: 'Components/Card',
	component: Card,
	subcomponents: { CardImage, CardHeader, CardContent, CardFooter }
};

const content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
const imageSrc = 'https://www.foodspring.it/magazine/wp-content/uploads/2020/11/GettyImages-1076946698-4.jpg'

export const Default = () => (
	<Row gutter={40} justify={'center'} spaceAfter={0}>
		<Col span={6} xs={10}>
			<Card>
				<CardImage src={imageSrc} />
				<CardHeader>Card Header</CardHeader>
				<CardContent>{content}</CardContent>
				<CardFooter>Card Footer</CardFooter>
			</Card>
		</Col>
	</Row>
);

export const DefaultVariant = () => (
	<Row gutter={40} justify={'center'} spaceAfter={0}>
		<Col span={6} xs={10}>
			<Card header={'Card Header'} footer={'Card Footer'} image={imageSrc}>
				{content}
			</Card>
		</Col>
	</Row>
);

export const Align = () => (
	<Row gutter={40} justify={'center'} spaceAfter={0}>
		<Col span={4} xs={10}>
			<Card header={'Left Align'} align={'left'} spaceAfter={20}>{content}</Card>
		</Col>
		<Col span={4} xs={10}>
			<Card header={'Center Align'} align={'center'} spaceAfter={20}>{content}</Card>
		</Col>
		<Col span={4} xs={10}>
			<Card header={'Right Align'} align={'right'} spaceAfter={20}>{content}</Card>
		</Col>
	</Row>
);
