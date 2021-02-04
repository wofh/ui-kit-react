import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box } from '../Box';
import { Button } from '../Button';
import { Dropdown, DropdownItem } from './';

export default {
   title: 'Components/Dropdown',
   component: Dropdown,
   subcomponents: { DropdownItem },
};

const dropdownContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

export const Default = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Dropdown trigger={<Button label={'Click to open'} use={'primary'} />} background={'lighter'}>
            <DropdownItem onClick={action('Item 1 Clicked')}>Menu Item 1</DropdownItem>
            <Dropdown.Item onClick={action('Item 2 Clicked')}>Menu Item 2</Dropdown.Item>
            <DropdownItem onClick={action('Item 3 Clicked')}>Menu Item 3</DropdownItem>
         </Dropdown>
      </Box>
   </Box>
);

export const Position = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Bottom'} />}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Top'} />} position={'top'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Left'} />} position={'left'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Right'} />} position={'right'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Custom Position'} />} background={'lighter'} position={{ top: 'bottom', right: 'left' }}>
               The top side of the dropdown content is paired with the bottom side of the trigger element and the right side of the dropdown content is paired with the left side of the trigger element
            </Dropdown>
         </Box>
      </Box>
   </Box>
);

export const Align = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Left'} />} align={'left'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Center'} />} align={'center'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Right'} />} align={'right'}>{dropdownContent}</Dropdown>
         </Box>
      </Box>
   </Box>
);

export const Width = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'240'} />} w={240} background={'lighter'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'320px'} />} w={'320px'} background={'lighter'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown pad={'small'} trigger={<Button label={'Min / Max'} />} w={{ min: 180, max: 280 }} background={'lighter'}>{dropdownContent}</Dropdown>
         </Box>
      </Box>
   </Box>
);