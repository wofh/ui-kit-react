import React from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';
import { Sidebar } from './Sidebar'

export default {
	title: 'Sidebar',
	component: Sidebar,
};

const SidebarHeader = () => (
	<Avatar />
);

const SidebarFooter = () => (
	<Box>
		<Icon icon={'support'} />
	</Box>
);

const MainNavigation = () => (
	<Box>
		<Icon icon={'grid'} />
	</Box>
);

export const Default = () => (
	<div>
		<Box pad={'xsmall'} height={'500px'}>
			<Sidebar header={<SidebarHeader />} footer={<SidebarFooter />}>
				<MainNavigation />
			</Sidebar>
		</Box>
	</div>
);
