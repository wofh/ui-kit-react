import React from 'react';
import styled, { css } from 'styled-components';
import { color, spacing, typography } from '../../shared/styles';

const StyledInput = styled.input`
   display: block;
   width: 100%;
   border: none;

   padding: 0 ${typography.size.m1}px;
   font-size: ${typography.size.s2}px;
   line-height: ${typography.size.m1 * 2}px;
   box-shadow: 0 0 0 1px ${color.medium};
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

export const Input = (props) => {
   return <StyledInput {...props} />
}