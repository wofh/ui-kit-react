import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from '../Image'
import { width } from '../../shared/mixins'

const StyledBrand = styled.div`
	max-width: 300px;
	line-height: 0;
	${props => props.w && width(props.w)}
`
const StyledBrandImage = styled(Image)`
	width: 100%;
`

export const Brand = ({ src, ...props }) => {
	return (
		<StyledBrand {...props}>
			<StyledBrandImage src={src} />
		</StyledBrand>
	);
}

Brand.propTypes = {
	src: PropTypes.string,

	/**
	 * Width of the brand. It can be an object with `min` and `max` keys to set accordingly min-width and max-width.
	 */
	w: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.shape({
			min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			max: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		})
	]),
}

Brand.defaultProps = {
	src: null
}