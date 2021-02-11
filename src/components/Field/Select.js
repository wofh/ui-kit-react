import { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { color, spacing, typography } from '../../shared/styles';
import { hex2rgba } from '../../shared/mixins';

const StyledIcon = styled.span`
   position: absolute;
   line-height: 0;
   width: 36px;
   text-align: center;
   color: ${color.mediumdark};
`;

const StyledOption = styled.option``;

const StyledSelect = styled.select`
   width: 100%;
   border: none;
   height: ${typography.size.m2 * 2}px;
   background-color: transparent;
`;

const StyledInput = styled.div`
   position: relative;

   display: block;
   width: 100%;
   border: none;
   outline: none;

   font-size: ${typography.size.s2}px;
   line-height: ${typography.size.m2 * 2}px;
   box-shadow: inset 0 0 0 1px ${color.medium};
   border-radius: ${spacing.borderRadius.default}px;
   padding: 0 ${typography.size.m1}px;

   ${(props) =>
      props.plain &&
      css`
         padding: 0;
         padding-right: ${typography.size.s1}px;

         ${StyledSelect} {
            padding: 0 ${typography.size.m1}px;
         }
      `}

   ${StyledIcon} {
      top: 50%;
      transform: translateY(-50%);

      &:first-child {
         left: 0;
      }

      &:last-child {
         right: 0;
      }
   }
`;

const StyledItemButton = styled.button`
   width: 100%;
   border: none;
   background-color: transparent;
   padding: ${spacing.padding.medium * 0.5}px ${spacing.padding.medium}px;
   margin: ${spacing.margin.xsmall * 0.5}px 0;
   text-align: left;
   cursor: pointer;
   border-radius: ${spacing.borderRadius.default}px;

   &:hover {
      background-color: ${hex2rgba(color.primary, 0.1)};
   }

   ${(props) =>
      props.active &&
      css`
         background-color: ${color.primary};
         color: #fff;

         &:hover {
            background-color: ${hex2rgba(color.primary, 0.9)};
         }
      `}

   &:disabled,
    &:disabled:hover {
      background-color: transparent;
      cursor: default;
   }
`;

const StyledWrapper = styled.div`
    position: relative;

    ul {
        position: absolute;
        width: 100%;
        z-index: 100;
        padding: ${spacing.padding.xsmall}px;
        margin: 0;
        margin-top: ${spacing.padding.xsmall}px;
        list-style: none;
        background-color: #FFF;
        overflow: auto;
        border-radius: ${spacing.borderRadius.default}px;
        border: 1px solid ${color.medium};
        max-height: 400px;

        li {
            ${StyledItemButton} {}
        }
    }

    ${StyledInput} {
        ${(props) =>
           !props.error &&
           !props.success &&
           css`
              ${props.focus &&
              css`
                 box-shadow: inset 0 0 0 1px ${color.primary};
              `}
           `}

        ${(props) =>
           props.error &&
           css`
              color: ${color.danger};
              box-shadow: inset 0 0 0 1px ${color.danger};
           `}

        ${(props) =>
           props.success &&
           css`
              color: ${color.success};
              box-shadow: inset 0 0 0 1px ${color.success};
           `}
    }
`;

const isOption = (option) => {
   return option !== null && typeof option === 'object' && 'value' in option && 'name' in option;
};

const getDisplayValue = (value) => {
   if (Array.isArray(value)) {
      return value.map((o) => isOption(o) && o.name).join(', ');
   }

   return isOption(value) ? value.name : '';
};

const getOption = (value, options) => {
   if (isOption(value)) {
      return value;
   }

   const newValue = value === null && options.length ? options[0].value : value;

   // eslint-disable-next-line eqeqeq
   return options.find((o) => o.value == newValue);
};

const getOptions = (value, oldValue, options, multiple) => {
   const newOption = getOption(value, options);

   if (!multiple) {
      return newOption || oldValue;
   }

   const newOptions = valueToArray(oldValue)
      .map((o) => getOption(o, options))
      .filter((o) => o !== null && o !== undefined);

   if (!newOption) {
      return newOptions;
   }

   // eslint-disable-next-line eqeqeq
   const optionIndex = newOptions.findIndex((o) => o.value == newOption.value);

   if (optionIndex >= 0) {
      newOptions.splice(optionIndex, 1);
   } else {
      newOptions.push(newOption);
   }

   return newOptions;
};

const getValue = (option) => {
   if (!option) {
      return null;
   }

   return isOption(option) ? option.value : null;
};

const valueToArray = (value) => {
   return !Array.isArray(value) ? [value] : value;
};

const getValues = (options) => {
   if (Array.isArray(options)) {
      return options.map((o) => getValue(o)).filter((v) => v !== null);
   }

   return getValue(options);
};

export const Select = ({
   closeOnSelect,
   plain,
   open,
   options,
   multiSelect,
   searchable,
   onChange = () => {},
   onFocus = () => {},
   onBlur = () => {},
   ...props
}) => {
   const ref = useRef(null);
   const [value, setValue] = useState(multiSelect ? [] : null);
   const [focus, setFocus] = useState(false);
   // const [search, setSearch] = useState('');

   const onSelect = useCallback(
      (newValue) => {
         const newOption = getOptions(
            newValue,
            value,
            Array.isArray(value) ? [...value, ...options] : options,
            multiSelect
         );

         setValue(newOption);
         onChange(getValues(newOption), newOption);

         if (closeOnSelect && ref) {
            ref.current.blur();
         }
      },
      [closeOnSelect, multiSelect, onChange, value, options]
   );

   const onMouseDown = useCallback(
      (e) => {
         e.preventDefault();
         onSelect(e.currentTarget.value);
      },
      [onSelect]
   );

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
         // setSearch('');
         onBlur(e);
      },
      [onBlur]
   );

   const isOptionActive = (option) => {
      if (Array.isArray(getValues(value))) {
         return getValues(value).includes(option.value);
      }

      return getValues(value) === option.value;
   };

   const renderArrowIcon = () => (
      <StyledIcon>
         <Icon icon={'arrowdown'} />
      </StyledIcon>
   );

   const renderIconLeft = () =>
      props.iconLeft ? (
         <StyledIcon>
            <Icon icon={props.iconLeft} />
         </StyledIcon>
      ) : null;

   const renderIconRight = () =>
      props.iconRight ? (
         <StyledIcon>
            <Icon icon={props.iconRight} />
         </StyledIcon>
      ) : plain ? null : (
         renderArrowIcon()
      );

   const renderOptions = () => {
      if (plain) {
         return [{ name: props.placeholder, disabled: true, selected: true }]
            .concat(options)
            .map(({ name, value, disabled, ...option }) => (
               <StyledOption key={name} value={value} disabled={disabled || false} {...option}>
                  {name}
               </StyledOption>
            ));
      }

      if (focus || open) {
         return (
            <ul>
               <li>
                  <StyledItemButton value={''} disabled={true}>
                     {props.placeholder}
                  </StyledItemButton>
               </li>
               {options.map((option) => (
                  <li key={option.name}>
                     <StyledItemButton
                        active={isOptionActive(option)}
                        value={option.value}
                        disabled={option.disabled || false}
                        onMouseDown={onMouseDown}
                        tabIndex={'-1'}
                     >
                        {option.name}
                     </StyledItemButton>
                  </li>
               ))}
            </ul>
         );
      }

      return null;
   };

   if (plain) {
      return (
         <StyledWrapper {...props}>
            <StyledInput plain={plain} {...props}>
               {renderIconLeft()}
               <StyledSelect {...props} defaultValue={props.value} onChange={onChange}>
                  {renderOptions()}
               </StyledSelect>
               {renderIconRight()}
            </StyledInput>
         </StyledWrapper>
      );
   }

   return (
      <StyledWrapper {...props} focus={focus}>
         <StyledInput {...props} ref={ref} tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
            {renderIconLeft()}
            <span>{getDisplayValue(value) || props.placeholder || ''}</span>
            {renderIconRight()}
         </StyledInput>
         {renderOptions()}
      </StyledWrapper>
   );
};

// Based on: https://github.com/tbleckert/react-select-search/blob/main/src/useSelect.js
Select.propTypes = {
   /**
    * The options the user can select from
    */
   options: PropTypes.arrayOf(
      PropTypes.shape({
         value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
         name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
         disabled: PropTypes.bool,
      })
   ).isRequired,

   /**
    * Close the selectbox on select
    */
   closeOnSelect: PropTypes.bool,

   /**
    * If `true` enables multiselect
    */
   multiSelect: PropTypes.bool,

   /**
    * If `true` enables search
    */
   // searchable: PropTypes.bool,

   /**
    * If `true` options will be rendered open
    */
   open: PropTypes.bool,

   /**
    * If `true` a plain select with minimal styling/feature will be rendered
    */
   plain: PropTypes.bool,
};

Select.defaultProps = {
   multiSelect: false,
   // searchable: false,
   closeOnSelect: true,
   open: false,
   plain: false,
};
