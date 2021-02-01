import React , {useState} from 'react';
import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

export const DatePickerr = (props) => {
    const [selectedDate,setSelectedDate] = useState(null);
    return (
        <div style={{height:'330px'}}> <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            placeholderText={'Select a date'}
            // showYearDropdown
            scrollableYearDropdown
            dateFormat="dd MMMM yyyy"
            />
        </div>
    )
}