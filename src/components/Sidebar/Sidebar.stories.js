import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
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
	<>
		<Button><Icon icon={'cog'} /></Button>
		<Button><Icon icon={'support'} /></Button>
	</>
);

const SidebarLabeledFooter = () => (
	<>
		<Button iconLeft={'cog'} label={'Settings'} />
		<Button iconLeft={'support'} label={'Support'} />
	</>
);

export const IconExample = () => (
	<div>
		<Box pad={'xsmall'} style={{height: '500px'}}>
			<Sidebar header={<SidebarHeader />} footer={<SidebarFooter />}>
				<Button><Icon icon={'dashboard'} /></Button>
				<Button><Icon icon={'grid'} /></Button>
				<Button><Icon icon={'comment'} /></Button>
			</Sidebar>
		</Box>
	</div>
);

export const LabelExample = () => (
	<div>
		<Box pad={'xsmall'} style={{height: '500px'}}>
			<Sidebar header={<SidebarHeader />} footer={<SidebarLabeledFooter />}>
				<Button iconLeft={'dashboard'} label={'Dashboard'} />
				<Button iconLeft={'grid'} label={'Widget'} />
				<Button iconLeft={'comment'} label={'Comments'} />
			</Sidebar>
		</Box>
	</div>
);
