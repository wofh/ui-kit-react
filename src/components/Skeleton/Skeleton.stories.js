import React from 'react';
import { Box } from '../Box';
import { Skeleton } from './Skeleton';
import { Heading } from '../Heading';
import { Row, Col } from '../Grid';
import { Card } from '../Card';
import { Text } from '../Text';

export default {
   title: 'Components/Skeleton',
   component: Skeleton,
};

export const Default = () => (
   <Row justify={'center'} spaceAfter={0}>
      <Col span={5} xs={12} xl={4}>
         <Card spaceAfter={20}>
            <Box>
               <Skeleton circle={true} w={100} h={100} />
            </Box>
            <Box>
               <Heading size={'xxlarge'}>
                  <Skeleton />
               </Heading>
            </Box>
            <Box>
               <Text>
                  <Skeleton count={4} w={'random'} />
               </Text>
            </Box>
         </Card>
      </Col>
      <Col span={5} xs={12} xl={4}>
         <Box>
            <Skeleton circle={true} w={100} h={100} />
         </Box>
         <Box>
            <Heading size={'xxlarge'}>
               <Skeleton />
            </Heading>
         </Box>
         <Box>
            <Text>
               <Skeleton count={4} />
            </Text>
         </Box>
      </Col>
   </Row>
);

export const SingleLine = () => <Skeleton />;

export const MultipleLines = () => <Skeleton count={5} />;

export const Circle = () => (
   <Box>
      <Skeleton circle={true} w={150} h={150} />
   </Box>
);

export const Rectangle = () => <Skeleton w={150} h={200} />;

export const Duration = () => <Skeleton duration={3} />;

export const RandomWidth = () => <Skeleton count={5} w={'random'} />;
