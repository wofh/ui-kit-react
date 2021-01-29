import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import { spacing, color } from '../../shared/styles';

const StyledRow = styled.div`
   box-sizing: border-box;
   flex-direction: row;
   flex-wrap: wrap;
   display: flex;

   ${props => (props.gutter > 0) && css`
      margin-left: ${props.gutter / -2}px;
      margin-right: ${props.gutter / -2}px;

      ${!props.noBottomGutter && css`
         margin-bottom: ${props.gutter}px;
      `}
   `}

   ${props => (props.align === 'top') && 'align-items: flex-start;'}
   ${props => (props.align === 'middle') && 'align-items: center;'}
   ${props => (props.align === 'bottom') && 'align-items: flex-end;'}
   ${props => (props.align === 'stretch') && 'align-items: stretch;'}

   ${props => (props.justify === 'start') && 'justify-content: flex-start;'}
   ${props => (props.justify === 'center') && 'justify-content: center;'}
   ${props => (props.justify === 'end') && 'justify-content: flex-end;'}
   ${props => (props.justify === 'space-between') && 'justify-content: space-between;'}
   ${props => (props.justify === 'space-around') && 'justify-content: space-around;'}

   :before,
   :after {
      display: flex;
   }

   *,
   :after,
   :before {
      box-sizing: border-box;
   }
`;

export const Row = ({ gutter, children, ...props }) => {

   const getCols = () => {
      return React.Children.map(children, (col) => {
         if (!col) {
            return null;
         }

         if (col.props && gutter > 0) {
            return React.cloneElement(col, Object.assign({}, col.props, { gutter }));
         }

         return col;
      });
   }

   return (
      <StyledRow {...props} gutter={gutter}>{getCols()}</StyledRow>
   )
}

Row.propTypes = {

   /**
    * Grid spacing
    */
   gutter: PropTypes.number,

   /**
    * Horizontal arrangement of the layout of flex
    */
   justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),

   /**
    * Vertical alignment of the layout of flex
    */
   align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),

   /**
    * If `true` removes the bottom gutter margin
    */
   noBottomGutter: PropTypes.bool
};

Row.defaultProps = {
   gutter: 0,
   justify: 'start',
   align: 'top',
   noBottomGutter: false
};
