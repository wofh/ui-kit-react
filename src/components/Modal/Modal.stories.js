import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { Box } from '../Box'
import { Button } from '../Button'
import { Modal } from './Modal'

export default {
	title: 'Components/Modal',
	component: Modal,
};

export const Default = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Box pad={'xsmall'}>
			<Button onClick={() => setIsOpen(true)} label={'Open Modal'} />
			<Modal isOpen={isOpen} w={{ min: 640, max: '100%' }} h={{ min: 640 }} onClose={() => setIsOpen(false)} />
		</Box>
	);
}