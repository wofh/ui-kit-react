import React from 'react';
import { Box } from './Box';

export default {
   title: 'Components/Box',
   component: Box,
};

export const Default = () => <Box>Default Box</Box>;

export const Padding = () => (
   <>
      <Box pad={'xsmall'}>
         <Box pad={'none'} background={'#EEE'}>
            None Padding
         </Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box pad={'xsmall'} background={'#EEE'}>
            Extra Small Padding
         </Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box pad={'small'} background={'#EEE'}>
            Small Padding
         </Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box pad={'medium'} background={'#EEE'}>
            Medium Padding
         </Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box pad={'large'} background={'#EEE'}>
            Large Padding
         </Box>
      </Box>
   </>
);

export const Background = () => (
   <>
      <Box pad={'xsmall'}>
         <Box background={'primary'}>Primary Background</Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box background={'secondary'}>Secondary Background</Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box background={'tertiary'}>Tertiary Background</Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box background={'danger'}>Danger Background</Box>
      </Box>
      <Box pad={'xsmall'}>
         <Box background={'#EEE'}>Custom HEX Background</Box>
      </Box>
   </>
);
