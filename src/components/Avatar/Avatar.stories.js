import React from 'react';
import { Box } from '../Box';
import { Avatar } from './Avatar';

export default {
   title: 'Components/Avatar/Avatar',
   component: Avatar,
};

const src = [
   'https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg',
   'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50',
   'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
   'https://randomuser.me/api/portraits/men/32.jpg',
];

export const Default = () => (
   <>
      <Avatar />
      <Avatar src={src[0]} />
   </>
);

export const Loading = () => (
   <>
      <Avatar isLoading />
   </>
);

export const Initial = () => (
   <>
      <Avatar name={'Stefano'} />
   </>
);

export const Sizes = () => (
   <>
      <Box>
         <Avatar src={src[0]} size={'large'} />
      </Box>
      <Box>
         <Avatar src={src[1]} size={'medium'} />
      </Box>
      <Box>
         <Avatar src={src[2]} size={'small'} />
      </Box>
      <Box>
         <Avatar src={src[3]} size={'tiny'} />
      </Box>
   </>
);
