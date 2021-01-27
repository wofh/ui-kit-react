import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { spacing, color, typography } from '../../shared/styles';
import { useTheme } from '../hooks';

const getBackgroundColor = (props) => {
   return props.background || props.theme.color.lighter;
};

const StyledSidebarHeader = styled.div`
   flex: 0 0 auto;
`;

const StyledSidebarFooter = styled.div`
   flex: 0 0 auto;
`;

const StyledSidebarChildren = styled.div`
   flex: 1 1 0%;
   margin: ${spacing.margin.medium}px 0;
`;

const StyledSidebar = styled.div`
   display: flex;
   flex-direction: column;
   max-width: 100%;
   min-width: 250px;
   min-height: 100%;
   padding: ${spacing.padding.medium}px;
   background-color: ${props => getBackgroundColor(props)};
`;

const StyledSidebarWrapper = styled.div`
   display: flex;
   flex-direction: row;
   max-width: 100%;
   min-height: 100%;
`;

const StyledItemIcon = styled.span`
   position: relative;
   width: ${spacing.padding.medium * 2}px;
   line-height: ${typography.size.l1 * 2}px;
   display: inline-block;
   ${props => props.left && css`
      text-align: right;
      color: ${color.darker} !important;
   `}

   & > * {
      margin-top: -2px;
   }
`;

const StyledItemLabel = styled.span`
   flex: 1 1 0%;
   line-height: ${typography.size.l1 * 2}px;
`;

const StyledSubItem = styled.div`
`;

const StyledItem = styled.button`
   position: relative;
   display: flex;
   width: 100%;
   background-color: transparent;
   outline: none;
   border: none;
   cursor: pointer;
   padding: 0;
   text-align: left;
   color: ${props => props.active ? color.primary : color.darker};
   font-size: ${typography.size.s3}px;
   line-height: ${typography.size.m1 * 2}px;
   font-weight: ${typography.weight.medium};

   &:hover {
      opacity: 0.8;
   }

   ${props => props.active && css`
      &:before {
         content: "";
         position: absolute;
         width: ${spacing.borderRadius.xsmall}px;
         height: ${typography.size.m1 * 1.5}px;
         background-color: ${color.secondary};
         top: 50%;
         transform: translateY(-50%);
         left: -20px;
         border-radius: 0 ${spacing.borderRadius.xsmall}px ${spacing.borderRadius.xsmall}px 0;
      }
   `};

   & + ${StyledSubItem} {
      ${props => !props.active && 'display: none;'}
   }

   ${StyledItemIcon} {
      ${props => props.active && css`
         color: ${color.secondary};
      `}
   }
`;

/**
 * A sidebar is tipically used for navigations.
 * Props `items` and `footer` accepts either a node element or an array of "item" objects. An "item" object can be defined as following:
 *
 * ```
 * {
 *    icon: 'cog',
 *    label: 'Label',
 *    onClick: (item) => console.log(item),
 *    items: []
 * }
 * ```
 *
 * An item object can have a sub set of items defined in with the key `items`.
 */
export const Sidebar = ({ items, footer, children, header, ...props }) => {
   const theme = useTheme()
   const propsWithTheme = { theme, ...props }
   const [activeItem, setActiveItem] = useState(null)
   const [activeParentItem, setActiveParentItem] = useState(null)

   const handleClick = (item, parentItem) => {

      if (activeParentItem && activeParentItem.label === item.label) {
         setActiveItem(null)
         setActiveParentItem(null)
      }
      else {
         setActiveItem(activeItem===item?null:item)
         setActiveParentItem(parentItem?parentItem:null)

         if (item.items && item.items.length) {
            handleClick(item.items[0], item)
         }
      }


      if (item.onClick) item.onClick(item)
   }

   const getItemIcon = icon => (
      <StyledItemIcon>
         {icon ? <Icon icon={icon} /> : null}
      </StyledItemIcon>
   )

   const getItemIconArrow = item => (
      <StyledItemIcon left>
         {item.items && item.items.length ? <Icon icon={(activeParentItem || activeItem) === item ? 'arrowup' :'arrowdown'} /> : null}
      </StyledItemIcon>
   )

   const getItemLabel = label => label ? (
      <StyledItemLabel>{label}</StyledItemLabel>
   ) : null

   const getItem = (item, index, parentItem = null) => {
      return (
         <div key={index}>
            <StyledItem active={activeItem === item || activeParentItem === item} onClick={() => handleClick(item, parentItem)}>
               {getItemIcon(item.icon||null)}
               {getItemLabel(item.label||null)}
               {getItemIconArrow(item)}
            </StyledItem>
            {item.items ? <StyledSubItem>{getItems(item.items, item)}</StyledSubItem>:null}
         </div>
      )
   }

   const getItems = (items, parentItem) => {
      if (!items) return null

      return items.map((item, index) => getItem(item, index, parentItem))
   }

   return (
      <StyledSidebarWrapper>
         <StyledSidebar {...propsWithTheme}>
            {header && <StyledSidebarHeader>{header}</StyledSidebarHeader>}
            <StyledSidebarChildren>{Array.isArray(items) ? getItems(items) : null}{children}</StyledSidebarChildren>
            {footer && <StyledSidebarFooter>{Array.isArray(footer) ? getItems(footer) : footer}</StyledSidebarFooter>}
         </StyledSidebar>
      </StyledSidebarWrapper>
   )
};

Sidebar.propTypes = {

   header: PropTypes.node,

   /**
    * A node element or an array of objects defining the sidebar navigation items
    */
   items: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(
         PropTypes.shape({
            label: PropTypes.string.required,
            icon: PropTypes.string,
            onClick: PropTypes.func,
            items: PropTypes.arrayOf(
               PropTypes.shape({
                  label: PropTypes.string.required,
                  onClick: PropTypes.func
               })
            )
         })
      )
   ]),

   /**
    * A node element or an array of objects defining the sidebar footer navigation items
    */
   footer: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(
         PropTypes.shape({
            label: PropTypes.string.required,
            icon: PropTypes.string,
            onClick: PropTypes.func,
            items: PropTypes.arrayOf(
               PropTypes.shape({
                  label: PropTypes.string.required,
                  onClick: PropTypes.func
               })
            )
         })
      )
   ]),

   /**
    * The background of the sidebar
    */
   background: PropTypes.string,

   children: PropTypes.node
};

Sidebar.defaultProps = {
   children: undefined,
   header: undefined,
   footerItems: undefined,
};
