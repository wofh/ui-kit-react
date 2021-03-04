import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import { color, spacing, typography } from '../../shared/styles';
// import { hex2rgba } from '../../shared/mixins';

const StyledDatePicker = styled.div`
   position: absolute;
   z-index: 100;
   padding: 0;
   margin: 0;
   margin-top: ${spacing.padding.xsmall}px;
   background-color: #fff;
   overflow: auto;
   border-radius: ${spacing.borderRadius.default}px;
   border: 1px solid ${color.medium};

   .DayPicker-Day--today {
      color: ${color.primary};
      font-weight: 600;
   }

   .DayPicker-Day {
      width: 38px;
      line-height: 1.4;
      border-radius: ${spacing.borderRadius.default}px;
   }

   .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
      background-color: ${color.primary};
   }
`;

const StyledInputDisplay = styled.div`
   position: relative;

   display: block;
   width: 100%;
   border: none;
   outline: none;

   font-size: ${typography.size.s2}px;
   min-height: ${typography.size.m2 * 2}px;
   line-height: 1.5;
   box-shadow: inset 0 0 0 1px ${color.medium};
   border-radius: ${spacing.borderRadius.default}px;
   padding: ${typography.size.m1 * 0.5}px ${typography.size.m1}px;
   padding-right: ${typography.size.m1 * 2}px;

   ${StyledDatePicker} {
   }
`;

const DatepickerWrapper = styled.div``;

export const Datepicker = ({
   open,
   iconLeft,
   iconRight,
   placeholder,
   onChange,
   onFocus,
   onBlur,
   displayFormat,
   closeOnSelect,
   ...props
}) => {
   const ref = useRef(null);
   const defaultValue = props.value || props.defaultValue || null;
   const [value, setValue] = useState(defaultValue);
   const [focus, setFocus] = useState(false);

   const handleFocus = useCallback(
      (e) => {
         setFocus(true);
         onFocus(e);
      },
      [onFocus]
   );

   const handleBlur = useCallback(
      (e) => {
         setFocus(false);
         onBlur(e);
      },
      [onBlur]
   );

   const handleDateSelect = useCallback(
      (selectedDate) => {
         setValue(selectedDate);
         onChange(selectedDate);

         if (closeOnSelect && ref) {
            ref.current.blur();
         }
      },
      [closeOnSelect, onChange, value]
   );

   const handleMouseDown = useCallback(
      (e) => {
         e.preventDefault();
      },
      [handleDateSelect]
   );

   const renderIconLeft = () =>
      iconLeft ? (
         <StyledIcon>
            <Icon icon={iconLeft} />
         </StyledIcon>
      ) : null;

   const renderIconRight = () =>
      iconRight ? (
         <StyledIcon>
            <Icon icon={iconRight} />
         </StyledIcon>
      ) : null;

   const renderInputDisplay = () => {
      return (
         <StyledInputDisplay ref={ref} tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
            {renderIconLeft()}
            <span>{(value ? moment(value).format(displayFormat) : null) || placeholder || ''}</span>
            {renderIconRight()}
         </StyledInputDisplay>
      );
   };

   const renderDatePicker = () => {
      if (focus || open) {
         return (
            <StyledDatePicker onMouseDown={handleMouseDown}>
               <DayPicker onDayClick={handleDateSelect} selectedDays={value} />
            </StyledDatePicker>
         );
      }

      return null;
   };

   return (
      <DatepickerWrapper focus={focus}>
         {renderInputDisplay()}
         {renderDatePicker()}
      </DatepickerWrapper>
   );
};

Datepicker.propTypes = {
   /**
    * If `true` datepicker will be rendered open
    */
   open: PropTypes.bool,

   /**
    * Close the selectbox on select
    */
   closeOnSelect: PropTypes.bool,

   /**
    * The momentjs format used for displaying the selected date as value of the inout field
    */
   displayFormat: PropTypes.string,

   onChange: PropTypes.func,
   onFocus: PropTypes.func,
   onBlur: PropTypes.func,
};

Datepicker.defaultProps = {
   open: false,
   closeOnSelect: true,
   displayFormat: 'LLL',
   onChange: () => {},
   onFocus: () => {},
   onBlur: () => {},
};
