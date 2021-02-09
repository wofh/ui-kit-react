import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CardHeader } from './CardHeader'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'
import { spacing, color } from '../../shared/styles'

const StyledCard = styled.div`
   border-radius: ${spacing.borderRadius.default}px;
   box-shadow: 0 0 0 1px ${color.medium};
   background-color: ${color.lightest};

   ${(props) => props.align && 'text-align: ' + props.align};
   ${(props) =>
      props.background && 'background-color: ' + (color[props.background] || props.background)};

   ${props => props.spaceAfter && css`margin-bottom: ${props.spaceAfter}px;`}
`;

export const Card = ({ children, header, footer, ...props }) => {

   const getHeader = () => {

      if (!header) return null

      // Check if child content is already a CardHeader
      if (typeof header == 'object' && header.type === (<CardHeader />).type) {
         return <header.type {...props} {...header.props} />
      }

      return <CardHeader {...props}>{header}</CardHeader>
   }

   const getContent = () => {

      if (Array.isArray(children)) {
         return children;
      }

      // Check if child content is already a CardContent
      if (typeof children == 'object' && children.type === (<CardContent />).type) {
         return <children.type {...props} {...children.props} />
      }

      return <CardContent {...props}>{children}</CardContent>
   }

   const getFooter = () => {

      if (!footer) return null

      // Check if child content is already a CardFooter
      if (typeof footer == 'object' && footer.type === (<CardFooter />).type) {
         return <footer.type {...props} {...footer.props} />
      }

      return <CardFooter {...props}>{footer}</CardFooter>
   }

   return (
      <StyledCard {...props}>
         {getHeader()}
         {getContent()}
         {getFooter()}
      </StyledCard>
   )
}

Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

Card.propTypes = {

   /**
    * Text align
    */
   align: PropTypes.oneOf(['left', 'center', 'right']),

   /**
    * Background color
    */
   background: PropTypes.string,

   /**
    * Defines a custom bottom spacing
    */
   spaceAfter: PropTypes.number
};

Card.defaultProps = {
   spaceAfter: undefined
};
