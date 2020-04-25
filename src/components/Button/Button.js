import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, typography, spacing } from '../../shared/styles'

const sizes = {
	large: typography.size.m1,
	medium: typography.size.s3,
	small: typography.size.s2,
	tiny: typography.size.s1,
};

const padding = {
	large: '0.75rem 1.75rem',
	medium: '0.75rem 1.25rem',
	small: '0.5rem 1rem',
	tiny: '0.5rem 0.75rem',
}

const backgroundColor = {
	primary: color.primary,
	secondary: color.secondary,
	tertiary: color.tertiary,
	danger: color.danger,
}

const ButtonStyled = styled.button`
	outline: none;
	border: none;
	color: #FFF;
	cursor: pointer;
	border-radius: ${spacing.borderRadius.large}px;
	background-color: ${props => backgroundColor[props.use]||backgroundColor.tertiary};
	padding: ${props => padding[props.size]};
	font-size: ${props => sizes[props.size]}px;
	line-height: ${props => sizes[props.size]}px;

	&:hover {
		opacity: 0.8;
	}

	&:disabled {
		background-color: #A7B6C2;
		cursor: default;
	}
`
const Button = ({ children, label, loadingText, ...props }) => {
	const getContent = () => {
		if (props.isLoading) {
			return loadingText
		}
		return label||children||''
	}

	return (
		<ButtonStyled {...props}>{getContent()}</ButtonStyled>
	);
}

Button.propTypes = {
	label: PropTypes.string,
	size: PropTypes.oneOf(Object.keys(sizes)),
	use: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger']),
	isLoading: PropTypes.bool,

	/**
	 * When a button is in the loading state you can supply custom text
	 */
	loadingText: PropTypes.string,
}

Button.defaultProps = {
	label: '',
	size: 'medium',
	use: 'tertiary',
	isLoading: false,
	loadingText: 'Loading...',
}

export default Button