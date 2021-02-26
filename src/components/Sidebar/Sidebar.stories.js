import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';
import { Sidebar } from './Sidebar';

export default {
   title: 'Components/Sidebar',
   component: Sidebar,
};

export const Default = () => {
   const items = [
      {
         icon: 'dashboard',
         label: 'Dashboard',
         onClick: (item) => console.log(item),
         items: [],
      },
      {
         icon: 'calendar',
         label: 'Calendar',
         onClick: () => {},
         items: [
            {
               icon: null,
               label: 'All Classes',
               onClick: () => {},
            },
            {
               icon: null,
               label: 'Group Lessons',
               onClick: () => {},
            },
            {
               icon: null,
               label: 'Bookings',
               onClick: () => {},
            },
            {
               icon: null,
               label: 'Workshops',
               onClick: () => {},
            },
         ],
      },
      {
         icon: 'repository',
         label: 'Classes',
         onClick: () => {},
      },
      {
         icon: 'users',
         label: 'Users',
         onClick: () => {},
      },
      {
         icon: 'book',
         label: 'Payments',
         onClick: () => {},
      },
      {
         icon: 'cog',
         label: 'Settings',
         onClick: () => {},
         items: [
            {
               icon: null,
               label: 'General',
               onClick: () => {},
            },
            {
               icon: null,
               label: 'Team',
               onClick: () => {},
            },
            {
               icon: null,
               label: 'Integrations',
               onClick: () => {},
            },
         ],
      },
   ];

   const footerItems = [
      {
         icon: 'support',
         label: 'Support',
         onClick: () => {},
         items: [],
      },
   ];

   return (
      <Box style={{ height: '640px' }}>
         <Sidebar header={<Avatar />} items={items} footer={footerItems} />
      </Box>
   );
};

export const Collapsed = () => {
   const items = [
      {
         icon: 'dashboard',
         label: 'Dashboard',
         onClick: (item) => console.log(item),
         items: [],
      },
      {
         icon: 'calendar',
         label: 'Calendar',
         onClick: () => {},
      },
      {
         icon: 'repository',
         label: 'Classes',
         onClick: () => {},
      },
      {
         icon: 'users',
         label: 'Users',
         onClick: () => {},
      },
      {
         icon: 'book',
         label: 'Payments',
         onClick: () => {},
      },
      {
         icon: 'cog',
         label: 'Settings',
         onClick: () => {},
      },
   ];

   const footerItems = [
      {
         icon: 'support',
         label: 'Support',
         onClick: () => {},
         items: [],
      },
   ];

   return (
      <Box style={{ height: '640px' }}>
         <Sidebar header={<Avatar />} items={items} footer={footerItems} collapsed />
      </Box>
   );
};

export const ActivePath = () => {
   const items = [
      {
         icon: 'dashboard',
         label: 'Dashboard',
         path: '/dashboard',
         onClick: (item) => console.log(item),
         items: [],
      },
      {
         icon: 'calendar',
         label: 'Calendar',
         path: '/calendar',
         onClick: () => {},
      },
      {
         icon: 'repository',
         label: 'Classes',
         path: '/classes',
         onClick: () => {},
      },
      {
         icon: 'users',
         label: 'Users',
         path: '/users',
         onClick: () => {},
      },
      {
         icon: 'book',
         label: 'Payments',
         path: '/payments',
         onClick: () => {},
      },
      {
         icon: 'cog',
         label: 'Settings',
         path: '/settings',
         onClick: () => {},
         items: [
            {
               icon: null,
               label: 'General',
               path: '/settings/general',
               onClick: () => {},
            },
            {
               icon: null,
               label: 'Team',
               path: '/settings/team',
               onClick: () => {},
            },
            {
               icon: null,
               label: 'Integrations',
               path: '/settings/integrations',
               onClick: () => {},
            },
         ],
      },
   ];

   const footerItems = [
      {
         icon: 'support',
         label: 'Support',
         path: '/support',
         onClick: () => {},
         items: [],
      },
   ];

   return (
      <Box style={{ height: '640px' }}>
         <Sidebar
            activePath={'/settings/team'}
            header={<Avatar />}
            items={items}
            footer={footerItems}
         />
      </Box>
   );
};
