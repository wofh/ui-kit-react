import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { spacing } from '../../shared/styles';

const StyledRow = styled.div`
   box-sizing: border-box;
   flex-direction: row;
   flex-wrap: wrap;
   display: flex;

   ${(props) =>
      props.gutter > 0 &&
      css`
         margin-left: ${props.gutter / -2}px;
         margin-right: ${props.gutter / -2}px;
         margin-bottom: ${props.gutter}px;

         ${typeof props.spaceAfter !== 'undefined' &&
         css`
            margin-bottom: ${props.spaceAfter}px;
         `}
      `}

   ${(props) => props.align === 'top' && 'align-items: flex-start;'}
   ${(props) => props.align === 'middle' && 'align-items: center;'}
   ${(props) => props.align === 'bottom' && 'align-items: flex-end;'}
   ${(props) => props.align === 'stretch' && 'align-items: stretch;'}

   ${(props) => props.justify === 'start' && 'justify-content: flex-start;'}
   ${(props) => props.justify === 'center' && 'justify-content: center;'}
   ${(props) => props.justify === 'end' && 'justify-content: flex-end;'}
   ${(props) => props.justify === 'space-between' && 'justify-content: space-between;'}
   ${(props) => props.justify === 'space-around' && 'justify-content: space-around;'}

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
   };

   return (
      <StyledRow {...props} gutter={gutter}>
         {getCols()}
      </StyledRow>
   );
};

Row.propTypes = {
   /**
    * Grid spacing
    */
   gutter: PropTypes.number,

   /**
    * Defines a custom bottom spacing. By default gets the value of `gutter` if no value is passed
    */
   spaceAfter: PropTypes.number,

   /**
    * Horizontal arrangement of the layout of flex
    */
   justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),

   /**
    * Vertical alignment of the layout of flex
    */
   align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
};

Row.defaultProps = {
   gutter: 20,
   spaceAfter: undefined,
   justify: 'start',
   align: 'top',
};
