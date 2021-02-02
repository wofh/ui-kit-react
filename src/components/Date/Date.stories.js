import React from 'react';
import { DatePick } from './Date';
import { Box } from '../Box';


export default {
    title: 'Date',
    component: DatePick,
 };



 export const Default = () => (
    <Box pad={'large'}>
        <DatePick />
        <DatePick value={"25 Aug 2020"} class={"red-border"}/>
    </Box> 
 )