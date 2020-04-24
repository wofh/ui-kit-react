import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from '../Image'

const BrandContainer = styled.div`
	max-width: 300px;
`
const BrandImage = styled(Image)`
	width: 100%;
`

const Brand = ({ src, ...props }) => {
	return (
		<BrandContainer {...props}>
			<BrandImage src={src} />
		</BrandContainer>
	);
}

Brand.propTypes = {
	src: PropTypes.string
}

Brand.defaultProps = {
	src: null
}

export default Brand