import React from 'react';
import styled, { css } from 'styled-components';
import { color, spacing, typography } from '../../shared/styles';

const StyledTextarea = styled.textarea`
   display: block;
   width: 100%;
   min-height: 36px;
   border: none;
   resize: none;

   padding: ${typography.size.m1 * 0.5}px ${typography.size.m1}px;
   font-size: ${typography.size.s2}px;
   line-height: 1.5;
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

export const Textarea = (props) => {
   return <StyledTextarea {...props} />
}