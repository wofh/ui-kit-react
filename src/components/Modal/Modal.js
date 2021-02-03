import React, { useEffect } from 'react'
import { createPortal } from "react-dom";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../Button';
import { Icon } from '../Icon';
import { spacing } from '../../shared/styles';
import { width, height } from '../../shared/mixins';

const StyledModal = styled.div`
	position: relative;
	min-width: 260px;
	margin-bottom: 100px;
	background: #FFF;
	border-radius: ${spacing.borderRadius.default}px;
	padding: ${spacing.padding.medium}px;
	z-index: 1000;

	${props => props.w && width(props.w)}
	${props => props.h && height(props.h)}
`

const StyledOverlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: #000;
	opacity: 0.75;
`

const StyledModalWrapper = styled.div`
	position: fixed;  top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;  height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`

const Portal = ({ modalRoot, children }) => {
	// const modalRoot = document.getElementById('modal');
	// const modalRoot = document.getElementsByTagName('body')[0];
	const el = document.createElement('div');

	useEffect(() => {
		modalRoot.appendChild(el);
	}, []);

	useEffect(() => {
		return () => modalRoot.removeChild(el);
	});

	return createPortal(children, el);
};

export const Modal = ({ isOpen, onClose, children, modalRoot, ...props }) => {

	if (!isOpen) {
		return null;
	}

	const getModal = () => {

		return (
			<StyledModalWrapper {...props}>
				<StyledModal {...props}>
					<Button plain onClick={onClose}><Icon icon={'close'} /></Button>
					{children}
				</StyledModal>
				<StyledOverlay onClick={onClose} />
			</StyledModalWrapper>
		)
	}

	return (
		<Portal modalRoot={modalRoot}>
			{getModal()}
		</Portal>
	);
}

Modal.propTypes = {

	/**
	 * Set `true` to open the modal
	 */
	isOpen: PropTypes.bool,

	/**
	 *
	 */
	onClose: PropTypes.func,

	/**
	* Height of the modal. It can be an object with `min` and `max` keys to set accordingly min-height and max-height.
	*/
	h: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.shape({
			min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			max: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		})
	]),

	/**
	 * Width of the modal. It can be an object with `min` and `max` keys to set accordingly min-width and max-width.
	 */
	w: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.shape({
			min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			max: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		})
	]),

	/**
	 *
	 */
	modalRoot: PropTypes.node
}

Modal.defaultProps = {
	modalRoot: document.body
}