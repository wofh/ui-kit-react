import React from 'react';
import { DatePick } from './Date';

export default {
    title: 'Date',
    component: DatePick
 };

 export const Default = () => (
     <div style = {{display: "flex"}}>
        <DatePick/>
        <DatePick/>
        <DatePick/>
        <DatePick/>
    </div>
 )