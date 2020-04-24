import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img`
`

Image.propTypes = {
	src: PropTypes.string
}

Image.defaultProps = {
	src: null
}

export default Image