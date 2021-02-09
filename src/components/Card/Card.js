import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CardImage } from './CardImage'
import { CardHeader } from './CardHeader'
import { CardContent } from './CardContent'
import { CardFooter } from './CardFooter'
import { spacing, color } from '../../shared/styles'

const cardSubComponents = [
   <CardImage />,
   <CardHeader />,
   <CardContent />,
   <CardFooter />
]

const StyledCard = styled.div`
   overflow: hidden;
   border-radius: ${spacing.borderRadius.default}px;
   box-shadow: 0 0 0 1px ${color.medium};
   background-color: ${color.lightest};

   ${(props) => props.align && 'text-align: ' + props.align};
   ${(props) =>
      props.background && 'background-color: ' + (color[props.background] || props.background)};

   ${props => props.spaceAfter && css`margin-bottom: ${props.spaceAfter}px;`}
`;

export const Card = ({ children, header, footer, image, ...props }) => {

   const getImage = () => {

      if (!image) return null

      // Check if child content is already a CardImage
      if (typeof image == 'object' && image.type === (<CardImage />).type) {
         return <image.type {...props} {...image.props} />
      }

      return <CardImage {...props} src={image} />
   }

   const getHeader = () => {

      if (!header) return null

      // Check if child content is already a CardHeader
      if (typeof header == 'object' && header.type === (<CardHeader />).type) {
         return <header.type {...props} {...header.props} />
      }

      return <CardHeader {...props}>{header}</CardHeader>
   }

   const getContent = () => {

      // Check if child content is an array and is one of <CardHeader />, <CardContent />, <CardFooter />
      if (Array.isArray(children) && typeof children[0] == 'object' && cardSubComponents.filter((t) => t.type === children[0].type).length > 0) {
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
         {getImage()}
         {getHeader()}
         {getContent()}
         {getFooter()}
      </StyledCard>
   )
}

Card.Image = CardImage
Card.Header = CardHeader
Card.Content = CardContent
Card.Footer = CardFooter

Card.propTypes = {

   /**
    * Card content
    */
   children: PropTypes.node,

   /**
    * Card header content
    */
   header: PropTypes.string,

   /**
    * Card footer content
    */
   footer: PropTypes.string,

   /**
    * Card image source
    */
   image: PropTypes.string,

   /**
    * Card content
    */
   image: PropTypes.node,

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
