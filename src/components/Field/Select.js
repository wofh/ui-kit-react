import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useSelect } from 'react-select-search';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Input } from './Input';
import { color, spacing, typography } from '../../shared/styles';
import { hex2rgba } from '../../shared/mixins'

const StyledIcon = styled.span`
   position: absolute;
   line-height: 0;
   width: 36px;
   text-align: center;
   color: ${color.mediumdark};
`

const StyledOption = styled.option``

const StyledSelect = styled.select`
    width: 100%;
    border: none;
    height: ${typography.size.m2 * 2}px;
    background-color: transparent;
`

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

    ${props => props.plain && css`
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
`

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

    ${props => props.active && css`
        background-color: ${color.primary};
        color: #FFF;

        &:hover {
            background-color: ${hex2rgba(color.primary, 0.9)};
        }
    `}


    &:disabled,
    &:disabled:hover {
        background-color: transparent;
        cursor: default;
    }
`

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
        ${(props) => (!props.error && !props.success) && css`

            ${props.focus && css`
                box-shadow: inset 0 0 0 1px ${color.primary};
            `}
        `}

        ${(props) => props.error && css`
            color: ${color.danger};
            box-shadow: inset 0 0 0 1px ${color.danger};
        `}

        ${(props) => props.success && css`
            color: ${color.success};
            box-shadow: inset 0 0 0 1px ${color.success};
        `}
    }
`

export const Select = ({ onChange, plain, open, options, multiSelect, searchable, ...props }) => {
    const [snapshot, valueProps, optionProps] = useSelect({
        options,
        multiple: multiSelect,
        search: searchable,
        printOptions: open?'always':'auto',
        onChange: onChange,
        ...props,

        // https://github.com/tbleckert/react-select-search
        // getOptions: (query) => {}
    });

    // console.log('props', props)

    // console.log('snapshot', snapshot)
    // console.log('valueProps', valueProps)
    // console.log('optionProps', optionProps)

    const getArrowIcon = () =>  (
        <StyledIcon>
            <Icon icon={'arrowdown'} />
        </StyledIcon>
    )

    const getIconLeft = () =>
        props.iconLeft ? (
            <StyledIcon>
                <Icon icon={props.iconLeft} />
            </StyledIcon>
        ) : null;

    const getIconRight = () =>
        props.iconRight ? (
            <StyledIcon>
                <Icon icon={props.iconRight} />
            </StyledIcon>
        ) : (plain ? null : getArrowIcon());

    const isOptionActive = (option) => {

        if (Array.isArray(snapshot.value)) {
            return snapshot.value.includes(option.value)
        }

        return snapshot.value === option.value
    }

    const getOptions = () => {

        if ( plain ) {
            return [{ name: props.placeholder, disabled: true, selected: true }].concat(options).map(({ name, value, disabled, ...option}) => (
                <StyledOption key={name} value={value} disabled={disabled||false} {...option}>{name}</StyledOption>
            ))
        }

        if ( snapshot.focus || open ) {
            return (
                <ul>
                    <li>
                        <StyledItemButton value={''} disabled={true}>{props.placeholder}</StyledItemButton>
                    </li>
                    {snapshot.options.map((option) => (
                        <li key={option.name}>
                            <StyledItemButton active={isOptionActive(option)} {...optionProps} value={option.value} disabled={option.disabled||false}>{option.name}</StyledItemButton>
                        </li>
                    ))}
                </ul>
            )
        }

        return null
    }

    if (plain) {
        return (
            <StyledWrapper {...props}>
                <StyledInput plain={plain} {...props}>
                    {getIconLeft()}
                    <StyledSelect {...props} defaultValue={props.value} onChange={onChange}>
                        {getOptions()}
                    </StyledSelect>
                    {getIconRight()}
                </StyledInput>
            </StyledWrapper>
        )
    }

    return (
        <StyledWrapper {...props} {...snapshot}>
            <StyledInput {...valueProps} {...props}>
                {getIconLeft()}
                <span>{snapshot.displayValue || props.placeholder || ''}</span>
                {getIconRight()}
            </StyledInput>
            {getOptions()}
        </StyledWrapper>
    )
}

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