import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Icon } from '../Icon';
import { color, typography } from '../../shared/styles';
import { useTheme } from '../hooks';

const sizes = {
   large: typography.size.m1,
   medium: typography.size.s3,
   small: typography.size.s2,
   tiny: typography.size.s1,
};

const padding = {
   large: typography.size.m2,
   medium: typography.size.m1,
   small: typography.size.m1,
   tiny: typography.size.s1,
};

const getBackgroundColor = (props) => {
   return props.theme.color[props.use] || props.theme.color.tertiary;
};

const ButtonIcon = styled.span`
   position: relative;
   display: inline-block;
   top: -2px;
`;

const ButtonLabel = styled.span`
   display: inline-block;
`;

export const StyledButton = styled.button`
   outline: none;
   border: none;
   color: #fff;
   cursor: pointer;
   border-radius: ${(props) => props.theme.spacing.borderRadius.large}px;
   background-color: ${(props) => getBackgroundColor(props)};
   padding: 0 ${(props) => padding[props.size]}px;
   font-size: ${(props) => sizes[props.size]}px;
   line-height: ${(props) => padding[props.size] * 2}px;
   font-weight: ${(props) => props.theme.typography.weight.medium};

   ${(props) =>
      props.fullWidth &&
      css`
         display: block;
         width: 100%;
      `}

   ${ButtonIcon} {
      &:first-child {
         margin-right: 10px;
      }

      &:last-child {
         margin-left: 10px;
      }

      & > svg {
         width: ${(props) => sizes[props.size]}px;
         height: ${(props) => sizes[props.size]}px;
      }
   }

   &:hover {
      opacity: 0.8;
   }

   &:disabled {
      background-color: #a7b6c2;
      cursor: default;
   }
`;

export const Button = ({ children, label, loadingText, iconLeft, iconRight, ...props }) => {
   const theme = useTheme();
   const propsWithTheme = { theme, ...props };

   const getIconLeft = () =>
      iconLeft ? (
         <ButtonIcon>
            <Icon icon={iconLeft} />
         </ButtonIcon>
      ) : null;
   const getIconRight = () =>
      iconRight ? (
         <ButtonIcon>
            <Icon icon={iconRight} />
         </ButtonIcon>
      ) : null;

   const getContent = () => {
      if (props.isLoading) {
         return loadingText;
      }
      return label || children || '';
   };

   return (
      <StyledButton {...propsWithTheme}>
         {getIconLeft()}
         <ButtonLabel>{getContent()}</ButtonLabel>
         {getIconRight()}
      </StyledButton>
   );
};

Button.propTypes = {
   label: PropTypes.string,
   size: PropTypes.oneOf(Object.keys(sizes)),
   use: PropTypes.oneOf(Object.keys(color)),
   isLoading: PropTypes.bool,

   /**
    * When a button is in the loading state you can supply custom text
    */
   loadingText: PropTypes.string,

   /**
    * If `true` the button will grow up to the full width of its container
    */
   fullWidth: PropTypes.bool,

   /**
    * The icon to show on the left side of the label
    */
   iconLeft: PropTypes.string,

   /**
    * The icon to show on the right side of the label
    */
   iconRight: PropTypes.string,
};

Button.defaultProps = {
   label: '',
   size: 'medium',
   use: 'tertiary',
   isLoading: false,
   loadingText: 'Loading...',
   fullWidth: false,
   iconLeft: undefined,
   iconRight: undefined
};
