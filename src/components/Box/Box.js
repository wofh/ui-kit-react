import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spacing, color } from '../../shared/styles'

const padding = {
	xsmall: spacing.padding.xsmall + 'px',
	small: spacing.padding.small + 'px',
	medium: spacing.padding.medium + 'px',
	large: spacing.padding.large + 'px',
}

const BoxStyled = styled.div`
	padding: ${props => padding[props.pad]};
	${props => props.align && 'text-align: ' + props.align}
	${props => props.background && 'background-color: ' + (color[props.background] || props.background)}
`

const Box = (props) => <BoxStyled {...props} />

Box.propTypes = {
	pad: PropTypes.oneOf(Object.keys(padding)),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	background: PropTypes.string,
}

Box.defaultProps = {
	pad: 'small'
}

export default Box