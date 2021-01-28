import React from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

export default {
   title: 'Components/Dropdown',
   component: Dropdown,
};

const dropdownContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

export const Default = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Dropdown trigger={<Button label={'Click to open'} use={'primary'} />} background={'lighter'}>{dropdownContent}</Dropdown>
      </Box>
   </Box>
);

export const Position = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Bottom'} />}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Top'} />} position={'top'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Left'} />} position={'left'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Right'} />} position={'right'}>{dropdownContent}</Dropdown>
         </Box>
      </Box>
   </Box>
);

export const Align = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Left'} />} align={'left'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Center'} />} align={'center'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Right'} />} align={'right'}>{dropdownContent}</Dropdown>
         </Box>
      </Box>
   </Box>
);

export const Width = () => (
   <Box pad={'large'} align={'center'} style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
      <Box style={{ margin: '0 auto' }}>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'240'} />} w={240} background={'lighter'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'320px'} />} w={'320px'} background={'lighter'}>{dropdownContent}</Dropdown>
         </Box>
         <Box style={{ display: 'inline-flex' }}>
            <Dropdown trigger={<Button label={'Min / Max'} />} w={{ min: 180, max: 280 }} background={'lighter'}>{dropdownContent}</Dropdown>
         </Box>
      </Box>
   </Box>
);