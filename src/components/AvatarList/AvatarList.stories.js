import React from 'react';
import { Box } from '../Box';
import { AvatarList } from './AvatarList';

export default {
   title: 'Components/Avatar/AvatarList',
   component: AvatarList,
};

const users = [
   { avatarUrl: 'https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg' },
   {
      avatarUrl:
         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50',
   },
   {
      avatarUrl:
         'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
   },
   { avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
];

export const Default = () => <AvatarList users={users} />;

export const userCount = () => <AvatarList users={users} userCount={50} />;

export const sizes = () => (
   <>
      <Box>
         <AvatarList users={users} size={'large'} />
      </Box>
      <Box>
         <AvatarList users={users} size={'medium'} />
      </Box>
      <Box>
         <AvatarList users={users} size={'small'} />
      </Box>
      <Box>
         <AvatarList users={users} size={'tiny'} />
      </Box>
   </>
);

export const Loading = () => <AvatarList isLoading />;

export const Empty = () => <AvatarList users={[]} />;
