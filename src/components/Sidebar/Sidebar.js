import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledButton } from '../Button';
import { spacing, color, typography } from '../../shared/styles';
import { useTheme } from '../hooks';

const getBackgroundColor = (props) => {
   return props.background || props.theme.color.mediumlight;
};

const StyledSidebarHeader = styled.div`
   flex: 0 0 auto;
`;

const StyledSidebarFooter = styled.div`
   flex: 0 0 auto;
`;

const StyledSidebarChildren = styled.div`
   flex: 1 1 0%;
   margin: ${spacing.margin.small}px 0;
`;

const StyledSidebar = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 100%;
   min-height: 100%;
   padding: ${spacing.padding.small}px;
   background-color: ${props => getBackgroundColor(props)};
`;

const StyledSidebarWrapper = styled.div`
   display: flex;
   flex-direction: row;
   max-width: 100%;
   min-height: 100%;

   ${StyledButton} {
      display: block;
      background-color: transparent;
      color: ${color.darkest};
      padding-left: ${spacing.padding.small}px;
      padding-right: ${spacing.padding.small}px;

      svg {
         width: ${typography.size.m2}px;
         height: ${typography.size.m2}px;
      }
   }
`;

export const Sidebar = ({ children, header, footer, ...props }) => {
   const theme = useTheme();
   const propsWithTheme = { theme, ...props };

   return (
      <StyledSidebarWrapper>
         <StyledSidebar pad={'medium'} {...propsWithTheme}>
            <StyledSidebarHeader>{header}</StyledSidebarHeader>
            <StyledSidebarChildren>{children}</StyledSidebarChildren>
            <StyledSidebarFooter>{footer}</StyledSidebarFooter>
         </StyledSidebar>
      </StyledSidebarWrapper>
   )
};

Sidebar.propTypes = {
   children: PropTypes.node,
   header: PropTypes.node,
   footer: PropTypes.node,
};

Sidebar.defaultProps = {
   children: undefined,
   header: undefined,
   footer: undefined,
};
