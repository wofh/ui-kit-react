import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { color, spacing, typography } from '../../shared/styles';

export const StyledBase = styled.input`
   display: block;
   width: 100%;
   border: none;
   outline: none;

   padding: 0 ${typography.size.m1}px;
   font-size: ${typography.size.s2}px;
   line-height: ${typography.size.m1 * 2}px;
   box-shadow: inset 0 0 0 1px ${color.medium};
   border-radius: ${spacing.borderRadius.default}px;

   ${(props) => (!props.error && !props.success) && css`
      &:focus {
         box-shadow: 0 0 0 1px ${color.primary};
      }
   `}

   ${(props) => props.error && css`
      color: ${color.danger};
      box-shadow: 0 0 0 1px ${color.danger};
      &::-webkit-input-placeholder {
         color: ${color.danger};
      };
   `}

   ${(props) => props.success && css`
      color: ${color.success};
      box-shadow: 0 0 0 1px ${color.success};
      &::-webkit-input-placeholder {
         color: ${color.success};
      };
   `}
`;

const StyledIcon = styled.span`
   position: absolute;
`

const StyledInputWrapper = styled.div`
   position: relative;

   ${StyledIcon} {
      line-height: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      text-align: center;
      color: ${color.mediumdark};

      &:first-child {
         left: 0;
      }

      &:last-child {
         right: 0;
      }

      ${(props) => props.error && css`
         color: ${color.danger};
      `}

      ${(props) => props.success && css`
         color: ${color.success};
      `}
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

export const Input = (props) => {

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
         <StyledBase {...props} defaultValue={props.value} />
         {getIconRight()}
      </StyledInputWrapper>
   )
}