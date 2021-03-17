import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, spacing, typography } from '../../shared/styles';
import useCombinedRefs from '../../utils/useCombinedRefs';
import { Icon } from '../Icon';
import { StyledBase } from './Input';

const StyledIcon = styled.span`
   position: absolute;
   width: ${typography.size.m2 * 2}px;
   height: 100%;
   text-align: center;
   line-height: 0;
   color: ${color.mediumdark};
`;

const StyledButtons = styled.span`
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   right: 0;
   display: flex;
   flex-direction: column;
   height: 100%;
`;

const StyledInputWrapper = styled.div`
   position: relative;

   ${StyledIcon} {
      top: 50%;
      transform: translateY(-50%);

      &:first-child {
         left: 0;
      }
   }

   ${StyledButtons} {
      ${StyledIcon} {
         position: relative;
         cursor: pointer;
         top: auto;
         transform: none;

         svg {
            position: absolute;
            height: 16px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
         }

         &:first-child {
            svg {
               top: 65%;
            }
         }

         &:last-child {
            svg {
               top: 35%;
            }
         }

         &:hover {
            color: ${color.dark};
         }
      }
   }

   ${StyledBase} {
      padding-right: 0;

      ${(props) =>
         !props.plain &&
         css`
            -webkit-appearance: textfield;
            -moz-appearance: textfield;
            appearance: textfield;

            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
               -webkit-appearance: none;
            }

            padding-right: ${typography.size.m2 * 2}px;
         `}

      ${(props) =>
         props.iconLeft &&
         css`
            padding-left: ${typography.size.m2 * 2}px;
         `}
   }
`;

export const Number = forwardRef(({ onChange, onFocus, onBlur, plain, type, ...props }, ref) => {
   const innerRef = React.useRef(null);
   const combinedRef = useCombinedRefs(ref, innerRef);

   const increment = () => {
      combinedRef.current.stepUp();
      combinedRef.current.dispatchEvent(new Event('input', { bubbles: true }));
   };

   const decrement = () => {
      combinedRef.current.stepDown();
      combinedRef.current.dispatchEvent(new Event('input', { bubbles: true }));
   };

   const getIconLeft = () =>
      props.iconLeft ? (
         <StyledIcon>
            <Icon icon={props.iconLeft} />
         </StyledIcon>
      ) : null;

   const getArrowButtons = () =>
      plain ? null : (
         <StyledButtons>
            <StyledIcon onClick={increment}>
               <Icon icon={'arrowup'} />
            </StyledIcon>
            <StyledIcon onClick={decrement}>
               <Icon icon={'arrowdown'} />
            </StyledIcon>
         </StyledButtons>
      );

   return (
      <StyledInputWrapper {...props} plain={plain}>
         {getIconLeft()}
         <StyledBase
            ref={combinedRef}
            type={type}
            {...props}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
         />
         {getArrowButtons()}
      </StyledInputWrapper>
   );
});

Number.propTypes = {
   /**
    * If `true` a plain input[type="number"] with minimal styling/feature will be rendered
    */
   plain: PropTypes.bool,
};

Number.defaultProps = {
   plain: false,
};
