import React , {useState} from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { color } from '../../shared/styles';

const StyledDataPicker = createGlobalStyle `

    input{
        border:none;
        box-shadow: 0 0 0 1px ${color.medium};
        border-radius: 8px;
        width: calc(100% - 30px);
        height:32px;
        text-indent: 12px; 
    }
    input:focus {
        box-shadow: 0px 0px 5px ${color.primary};
    }
    .react-datepicker{
        background-color: white;
        width: 450px;
        padding: 10px;
        border-radius: 8px;
    }
    .react-datepicker__header{
        background-color: white;
    } 
    .react-datepicker__month-container *{
        width: 55px;
    }
    .react-datepicker__current-month{
        width: 200px;
        display: flex;
        padding: 15px;
    }
    .react-datepicker__navigation{
        color: blue;
        position: relative;
        top: 25px;
        left: 310px;
        margin: 0 12px;
    }
    .react-datepicker__navigation--previous {    
        transform: rotate(90deg);
        left: 290px;
    }
    .react-datepicker__navigation--next {
        position: relative;
        left: 280px;
        top: 32px;
        transform: rotate(90deg);
    }
    .react-datepicker__day-names *{
        color: ${color.mediumdark};
        margin-left: 4px;
    }
    .react-datepicker__day--keyboard-selected {
        background-color: ${color.primary}
    }
    .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
        border: none;
    }
    .react-datepicker__current-month:last-child {
      color: ${color.mediumdark};
    }
    .react-datepicker__day--selected {
        background-color: ${color.primary}
    }
`

export const DatePick = (props) => {
    const [selectedDate,setSelectedDate] = useState(null);
    return (
        <div style={{height:'330px'}}> 
        <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            placeholderText={'Select a date'}
            scrollableYearDropdown
            dateFormat="dd MMMM yyyy"
        />
        <StyledDataPicker/>
        </div>
    )
}