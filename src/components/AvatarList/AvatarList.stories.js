import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { AvatarList } from './AvatarList';

export default {
  title: 'AvatarList',
  component: AvatarList,
};

const users = [
  { avatarUrl: 'https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg' },
  {
    avatarUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMDc2M2NkMTctNmQ0MS00MjQxLWFkMGItNGY1Y2Y3NzYzZjg1XkEyXkFqcGdeQXVyNjAzMTgxNjY@._V1_UY256_CR74,0,172,256_AL_.jpg',
  },
  {
    avatarUrl:
      'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
  },
  { avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
];

export const Default = () => (
  <Box pad={'xsmall'}>
    <AvatarList users={users} />
  </Box>
);

export const userCount = () => (
  <Box pad={'xsmall'}>
    <AvatarList users={users} userCount={50} />
  </Box>
);

export const sizes = () => (
  <div>
    <Box pad={'small'}>
      <AvatarList users={users} size={'large'} />
    </Box>
    <Box pad={'small'}>
      <AvatarList users={users} size={'medium'} />
    </Box>
    <Box pad={'small'}>
      <AvatarList users={users} size={'small'} />
    </Box>
    <Box pad={'small'}>
      <AvatarList users={users} size={'tiny'} />
    </Box>
  </div>
);

export const Loading = () => (
  <Box pad={'xsmall'}>
    <AvatarList isLoading />
  </Box>
);

export const Empty = () => (
  <Box pad={'xsmall'}>
    <AvatarList users={[]} />
  </Box>
);
