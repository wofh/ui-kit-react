import React from 'react';
import { Box } from '../Box'
import { Row, Col } from './Grid'

export default {
	title: 'Components/Grid',
	subcomponents: {Row, Col},
};

export const Default = () => (
	<Box>
		<Row gutter={20}>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={1}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
		</Row>
		<Row gutter={20}>
			<Col span={2}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={2}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={2}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={2}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={2}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={2}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
		</Row>
		<Row gutter={20}>
			<Col span={4}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={4}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={4}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
		</Row>
		<Row gutter={20}>
			<Col span={6}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
			<Col span={6}>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
		</Row>
		<Row gutter={20}>
			<Col>
				<Box background={'secondary'} h={30} pad={'none'} />
			</Col>
		</Row>
	</Box>
);

export const NoGutter = () => (
	<Box>
		<Row>
			<Col span={6}>
				<Box background={'#17dfae'} pad={'medium'}></Box>
			</Col>
			<Col span={6}>
				<Box background={'#00c5e6'} pad={'medium'}></Box>
			</Col>
		</Row>
	</Box>
);

export const Gutter = () => (
	<Box>
		<Row gutter={40}>
			<Col span={4}>
				<Box background={'#17dfae'} pad={'medium'}></Box>
			</Col>
			<Col span={4}>
				<Box background={'#00c5e6'} pad={'medium'}></Box>
			</Col>
			<Col span={4}>
				<Box background={'#17dfae'} pad={'medium'}></Box>
			</Col>
		</Row>
	</Box>
);

export const ColumnOffset = () => (
	<Box>
		<Row gutter={20}>
			<Col span={4} offset={2}>
				<Box background={'#17dfae'} pad={'medium'}></Box>
			</Col>
			<Col span={4}>
				<Box background={'#00c5e6'} pad={'medium'}></Box>
			</Col>
		</Row>
	</Box>
);

export const ColumnOrder = () => (
	<Box>
		<Row gutter={20}>
			<Col span={3} order={4}>
				<Box background={'#17dfae'} pad={'medium'} align={'center'}>1</Box>
			</Col>
			<Col span={3} order={3}>
				<Box background={'#00c5e6'} pad={'medium'} align={'center'}>2</Box>
			</Col>
			<Col span={3} order={2}>
				<Box background={'#17dfae'} pad={'medium'} align={'center'}>3</Box>
			</Col>
			<Col span={3} order={1}>
				<Box background={'#00c5e6'} pad={'medium'} align={'center'}>4</Box>
			</Col>
		</Row>
	</Box>
);

export const ColumnSort = () => (
	<Box>
		<Row gutter={20} justify={'start'} align={'top'}>
			<Col span={3}>
				<Box background={'#17dfae'} pad={'medium'} h={200}></Box>
			</Col>
			<Col span={3}>
				<Box background={'#00c5e6'} pad={'medium'} h={80}></Box>
			</Col>
			<Col span={3}>
				<Box background={'#17dfae'} pad={'medium'} h={130}></Box>
			</Col>
		</Row>
		<Row gutter={20} justify={'end'} align={'middle'}>
			<Col span={3}>
				<Box background={'#17dfae'} pad={'medium'} h={200}></Box>
			</Col>
			<Col span={3}>
				<Box background={'#00c5e6'} pad={'medium'} h={80}></Box>
			</Col>
			<Col span={3}>
				<Box background={'#17dfae'} pad={'medium'} h={130}></Box>
			</Col>
		</Row>
		<Row gutter={20} justify={'center'} align={'bottom'}>
			<Col span={3}>
				<Box background={'#17dfae'} pad={'medium'} h={200}></Box>
			</Col>
			<Col span={3}>
				<Box background={'#00c5e6'} pad={'medium'} h={80}></Box>
			</Col>
			<Col span={3}>
				<Box background={'#17dfae'} pad={'medium'} h={130}></Box>
			</Col>
		</Row>
	</Box>
);

export const Responsive = () => (
	<Box>
		<Row gutter={20}>
			<Col xs={2} sm={4} md={6} lg={8} xl={10}>
				<Box background={'#17dfae'} pad={'medium'} />
			</Col>
			<Col xs={10} sm={8} md={6} lg={4} xl={2}>
				<Box background={'#00c5e6'} pad={'medium'} />
			</Col>
		</Row>
	</Box>
);

export const ExoticResponsive = () => (
	<Box>
		<Row gutter={20}>
			<Col xs={{ span: 6, offset: 2 }} md={{ span: 8 }} lg={{ span: 4, offset: 4 }}>
				<Box background={'#17dfae'} pad={'medium'} />
			</Col>
			<Col span={4} lg={{ span: 3, offset: 1 }}>
				<Box background={'#00c5e6'} pad={'medium'} />
			</Col>
		</Row>
	</Box>
);

export const Grow = () => (
	<Box>
		<Row gutter={20}>
			<Col span={2}>
				<Box background={'#00c5e6'} pad={'medium'} />
			</Col>
			<Col grow>
				<Box background={'#17dfae'} pad={'medium'} />
			</Col>
			<Col>
				<Box background={'#00c5e6'} pad={'medium'} w={300} />
			</Col>
		</Row>
	</Box>
);
