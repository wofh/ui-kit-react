import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpoint } from '../../shared/mixins';
import { styles } from '../../shared';

const grid_columns = styles.responsive.columns;

const span = (span) => {
   if (isNaN(span)) return css``;
   if (!span) return css``;
   return css`
      display: block;
      width: ${(span / grid_columns) * 100}%;
   `;
};

const offset = (offset = null) => {
   if (!offset) return css``;
   return css`
      margin-left: ${(offset / grid_columns) * 100}%;
   `;
};

const order = (order = null) => {
   if (!order) return css``;
   return css`
      order: ${order};
   `;
};

const StyledCol = styled.div`
   position: relative;
   min-height: 1px;
   max-width: 100%;
   float: left;
   flex: 0 0 auto;

   ${(props) =>
      props.gutter > 0 &&
      css`
         padding-left: ${props.gutter / 2}px;
         padding-right: ${props.gutter / 2}px;
      `}

   ${(props) => span(props.span)}
   ${(props) => offset(props.offset || 0)}
   ${(props) => order(props.order)}

   ${(props) => props.xs && breakpoint('xs', 'sm')(span(props.xs.span))}
   ${(props) => props.sm && breakpoint('sm', 'md')(span(props.sm.span))}
   ${(props) => props.md && breakpoint('md', 'lg')(span(props.md.span))}
   ${(props) => props.lg && breakpoint('lg', 'xl')(span(props.lg.span))}
   ${(props) => props.xl && breakpoint('xl')(span(props.xl.span))}

   ${(props) => props.xs && breakpoint('xs', 'sm')(offset(props.xs.offset))}
   ${(props) => props.sm && breakpoint('sm', 'md')(offset(props.sm.offset))}
   ${(props) => props.md && breakpoint('md', 'lg')(offset(props.md.offset))}
   ${(props) => props.lg && breakpoint('lg', 'xl')(offset(props.lg.offset))}
   ${(props) => props.xl && breakpoint('xl')(offset(props.xl.offset))}

   ${(props) => props.xs && breakpoint('xs', 'sm')(order(props.xs.order))}
   ${(props) => props.sm && breakpoint('sm', 'md')(order(props.sm.order))}
   ${(props) => props.md && breakpoint('md', 'lg')(order(props.md.order))}
   ${(props) => props.lg && breakpoint('lg', 'xl')(order(props.lg.order))}
   ${(props) => props.xl && breakpoint('xl')(order(props.xl.order))}

   ${(props) =>
      props.grow &&
      css`
         flex-grow: ${props.grow === true ? 1 : props.grow};
      `}
`;

export const Col = ({ children, ...props }) => {
   let sizesProps = {};
   let lastSizeProps = {};
   ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
      let sizeProps = {
         span: null,
         offset: 0,
         order: null,
      };

      /**
       * If Col has not a value defined for `xs`, `sm`, `md`, `lg` and `xl` get the `span` prop, otherwise get the last one cached
       */
      if (!props[size]) {
         if (props.span) {
            sizesProps[size] = Object.assign({}, props);
            return;
         }

         sizesProps[size] = Object.assign({}, lastSizeProps);
         return;
      }

      if (typeof props[size] === 'number') {
         sizeProps.span = props[size];
      } else if (typeof props[size] === 'object') {
         sizeProps = Object.assign({}, sizeProps, props[size]);
      }

      sizesProps[size] = Object.assign({}, sizeProps);
      lastSizeProps = Object.assign({}, sizeProps);
   });

   return (
      <StyledCol {...props} {...sizesProps}>
         {children}
      </StyledCol>
   );
};

Col.propTypes = {
   /**
    * Number of cells
    */
   span: PropTypes.number,

   /**
    * Number of cells to the left of the grid spacing, no cell in grid spacing
    */
   offset: PropTypes.number,

   /**
    * `col` number in row
    */
   order: PropTypes.number,

   /**
    * If `true` or positive value, sets the flex-grow rule
    */
   grow: PropTypes.bool,

   /**
    * <576px, could be a `span` value or a object contain above props
    */
   xs: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
         span: PropTypes.number,
         offset: PropTypes.number,
         order: PropTypes.number,
      }),
   ]),

   /**
    * ≥576px, could be a `span` value or a object contain above props
    */
   sm: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
         span: PropTypes.number,
         offset: PropTypes.number,
         order: PropTypes.number,
      }),
   ]),

   /**
    * ≥768px, could be a `span` value or a object contain above props
    */
   md: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
         span: PropTypes.number,
         offset: PropTypes.number,
         order: PropTypes.number,
      }),
   ]),

   /**
    * ≥992px, could be a `span` value or a object contain above props
    */
   lg: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
         span: PropTypes.number,
         offset: PropTypes.number,
         order: PropTypes.number,
      }),
   ]),

   /**
    * ≥1200px, could be a `span` value or a object contain above props
    */
   xl: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
         span: PropTypes.number,
         offset: PropTypes.number,
         order: PropTypes.number,
      }),
   ]),
};

Col.defaultProps = {
   span: null,
   offset: 0,
   grow: false,
};
