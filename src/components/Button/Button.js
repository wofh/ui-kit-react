import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, typography, spacing } from '../../shared/styles';
import { useTheme } from '../hooks';

const sizes = {
   large: typography.size.m1,
   medium: typography.size.s3,
   small: typography.size.s2,
   tiny: typography.size.s1,
};

const padding = {
   large: '0.75rem 1.75rem',
   medium: '0.75rem 1.25rem',
   small: '0.5rem 1rem',
   tiny: '0.5rem 0.75rem',
};

const getBackgroundColor = (props) => {
   return props.theme.color[props.use] || props.theme.color.tertiary;
};

const ButtonStyled = styled.button`
   outline: none;
   border: none;
   color: #fff;
   cursor: pointer;
   border-radius: ${(props) => props.theme.spacing.borderRadius.large}px;
   background-color: ${(props) => getBackgroundColor(props)};
   padding: ${(props) => padding[props.size]};
   font-size: ${(props) => sizes[props.size]}px;
   line-height: ${(props) => sizes[props.size]}px;
   font-weight: ${(props) => props.theme.typography.weight.semibold};

   &:hover {
      opacity: 0.8;
   }

   &:disabled {
      background-color: #a7b6c2;
      cursor: default;
   }
`;

export const Button = ({ children, label, loadingText, ...props }) => {
   const theme = useTheme();
   const propsWithTheme = { theme, ...props };

   const getContent = () => {
      if (props.isLoading) {
         return loadingText;
      }
      return label || children || '';
   };

   return <ButtonStyled {...propsWithTheme}>{getContent()}</ButtonStyled>;
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
};

Button.defaultProps = {
   label: '',
   size: 'medium',
   use: 'tertiary',
   isLoading: false,
   loadingText: 'Loading...',
};
