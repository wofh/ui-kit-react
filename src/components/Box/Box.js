import PropTypes from 'prop-types'
import styled from 'styled-components'
import { spacing, color } from '../../styles/variables'

const padding = {
	xsmall: spacing.padding.xsmall + 'px',
	small: spacing.padding.small + 'px',
	medium: spacing.padding.medium + 'px',
	large: spacing.padding.large + 'px',
}

const Box = styled.div`
	padding: ${props => padding[props.pad]};
	${props => props.align && 'text-align: ' + props.align}
	${props => props.background && 'background-color: ' + (color[props.background] || props.background)}
`

Box.propTypes = {
	pad: PropTypes.oneOf(Object.keys(padding)),
	align: PropTypes.oneOf(['left', 'center', 'right']),
	background: PropTypes.string,
}

Box.defaultProps = {
	pad: 'small'
}

export default Box