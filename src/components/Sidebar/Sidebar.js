import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';
import { spacing, color } from '../../shared/styles';

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
   background-color: ${color.mediumlight};
`;

const StyledSidebarWrapper = styled.div`
   display: flex;
   flex-direction: row;
   max-width: 100%;
   min-height: 100%;
`;

export const Sidebar = ({ children, header, footer, ...rest }) => {
   return (
      <StyledSidebarWrapper>
         <StyledSidebar pad={'medium'} {...rest}>
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
