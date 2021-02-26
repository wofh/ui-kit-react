import React from 'react';
import { Box } from '../Box';
import { Container, Row, Col } from './Grid';

export default {
   title: 'Components/Grid',
   subcomponents: { Container, Row, Col },
};

export const Default = () => (
   <Container>
      <Row>
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
      <Row>
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
      <Row>
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
      <Row>
         <Col span={6}>
            <Box background={'secondary'} h={30} pad={'none'} />
         </Col>
         <Col span={6}>
            <Box background={'secondary'} h={30} pad={'none'} />
         </Col>
      </Row>
      <Row>
         <Col span={12}>
            <Box background={'secondary'} h={30} pad={'none'} />
         </Col>
      </Row>
   </Container>
);

export const NoGutter = () => (
   <Container>
      <Row gutter={0}>
         <Col span={6}>
            <Box background={'#17dfae'} pad={'medium'}></Box>
         </Col>
         <Col span={6}>
            <Box background={'#00c5e6'} pad={'medium'}></Box>
         </Col>
      </Row>
   </Container>
);

export const Gutter = () => (
   <Container>
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
   </Container>
);

export const ColumnOffset = () => (
   <Container>
      <Row>
         <Col span={4} offset={2}>
            <Box background={'#17dfae'} pad={'medium'}></Box>
         </Col>
         <Col span={4}>
            <Box background={'#00c5e6'} pad={'medium'}></Box>
         </Col>
      </Row>
   </Container>
);

export const ColumnOrder = () => (
   <Container>
      <Row>
         <Col span={3} order={4}>
            <Box background={'#17dfae'} pad={'medium'} align={'center'}>
               1
            </Box>
         </Col>
         <Col span={3} order={3}>
            <Box background={'#00c5e6'} pad={'medium'} align={'center'}>
               2
            </Box>
         </Col>
         <Col span={3} order={2}>
            <Box background={'#17dfae'} pad={'medium'} align={'center'}>
               3
            </Box>
         </Col>
         <Col span={3} order={1}>
            <Box background={'#00c5e6'} pad={'medium'} align={'center'}>
               4
            </Box>
         </Col>
      </Row>
   </Container>
);

export const ColumnSort = () => (
   <Container>
      <Row justify={'start'} align={'top'}>
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
      <Row justify={'end'} align={'middle'}>
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
      <Row justify={'center'} align={'bottom'}>
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
   </Container>
);

export const Responsive = () => (
   <Container>
      <Row>
         <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <Box background={'#17dfae'} pad={'medium'} />
         </Col>
         <Col xs={10} sm={8} md={6} lg={4} xl={2}>
            <Box background={'#00c5e6'} pad={'medium'} />
         </Col>
      </Row>
   </Container>
);

export const ExoticResponsive = () => (
   <Container>
      <Row>
         <Col xs={{ span: 6, offset: 2 }} md={{ span: 8 }} lg={{ span: 4, offset: 4 }}>
            <Box background={'#17dfae'} pad={'medium'} />
         </Col>
         <Col span={4} lg={{ span: 3, offset: 1 }}>
            <Box background={'#00c5e6'} pad={'medium'} />
         </Col>
      </Row>
   </Container>
);

export const Grow = () => (
   <Container>
      <Row>
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
   </Container>
);

export const ContainerMaxWidth = () => (
   <Container maxWidth={520}>
      <Row>
         <Col span={3}>
            <Box background={'#17dfae'} pad={'medium'}></Box>
         </Col>
         <Col span={5}>
            <Box background={'#00c5e6'} pad={'medium'}></Box>
         </Col>
         <Col span={4}>
            <Box background={'#17dfae'} pad={'medium'}></Box>
         </Col>
      </Row>
   </Container>
);

export const ContainerAlign = () => (
   <>
      <Container maxWidth={420} spaceAfter={20}>
         <Row>
            <Col span={12}>
               <Box background={'#17dfae'} pad={'medium'}></Box>
            </Col>
         </Row>
      </Container>
      <Container maxWidth={420} align={'left'} spaceAfter={20}>
         <Row>
            <Col span={12}>
               <Box background={'#00c5e6'} pad={'medium'}></Box>
            </Col>
         </Row>
      </Container>
      <Container maxWidth={420} align={'right'} spaceAfter={20}>
         <Row>
            <Col span={12}>
               <Box background={'#17dfae'} pad={'medium'}></Box>
            </Col>
         </Row>
      </Container>
   </>
);
