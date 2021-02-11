import React from 'react';
import styled, { css } from 'styled-components';
import { color, spacing, typography } from '../../shared/styles';
import { Icon } from '../Icon';
import { StyledBase } from './Input';

const StyledIcon = styled.span`
   position: absolute;
   line-height: 0;
   width: 36px;
   text-align: center;
   color: ${color.mediumdark};
`

const StyledInputWrapper = styled.div`
   position: relative;

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

   ${StyledBase} {
      ${props => props.iconLeft && css`
         padding-left: 36px;
      `}

      ${props => props.iconRight && css`
         padding-right: 36px;
      `}
   }
`

export const Email = ({ onChange, ...props }) => {

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
        ) : null;

    return (
        <StyledInputWrapper {...props}>
            {getIconLeft()}
            <StyledBase {...props} onChange={onChange} defaultValue={props.value} />
            {getIconRight()}
        </StyledInputWrapper>
    )
}