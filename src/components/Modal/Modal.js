import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { spacing } from '../../shared/styles';
import { width, height, breakpoint } from '../../shared/mixins';

const GlobalStyleBodyWithModal = createGlobalStyle`
	body {
		${(props) =>
         props.isOpen &&
         css`
            overflow: hidden;
         `}
	}
`;

const StyledModalCloseButton = styled.div`
   position: absolute;
   top: 0;
   right: 0;

   button {
      padding: 10px;
   }
`;

const StyledModal = styled.div`
	position: relative;
	min-width: 260px;
	background: #FFF;
	border-radius: ${spacing.borderRadius.default}px;
	padding: ${spacing.padding.large}px;
	z-index: 1000;
	${width('90%')}

	${breakpoint('xs')(css`
      margin-top: 20px;
      margin-bottom: 20px;
   `)}

	${breakpoint('md')(css`
      margin-top: 5%;
      margin-bottom: 40px;
   `)}

	${(props) => props.w && width(props.w)}
	${(props) => props.h && height(props.h)}

	${(props) =>
      props.fullScreen &&
      css`
		${width('100%')}
		padding: ${spacing.padding.large}px;
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	`}
`;

const StyledOverlay = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
`;

const StyledModalWrapper = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: start;
   align-items: center;
   flex-direction: column;
   z-index: 100;
   background-color: ${({ overlayColor }) =>
      overlayColor && typeof overlayColor === 'string' ? overlayColor : 'transparent'};
   overflow: auto;

   ${(props) =>
      props.fullScreen &&
      css`
         background: #fff;
      `}
`;

const Portal = ({ modalRoot, children }) => {
   // const modalRoot = document.getElementById('modal');
   // const modalRoot = document.getElementsByTagName('body')[0];
   const el = document.createElement('div');

   useEffect(() => {
      modalRoot.appendChild(el);
   }, [el]);

   useEffect(() => {
      return () => modalRoot.removeChild(el);
   }, [el]);

   return createPortal(children, el);
};

export const Modal = ({ isOpen, onClose, hideCloseIcon, children, modalRoot, ...props }) => {
   if (!isOpen) {
      return null;
   }

   const getCloseButton = () => {
      if (!onClose) {
         return null;
      }

      if (hideCloseIcon) {
         return null;
      }

      return (
         <StyledModalCloseButton>
            <Button plain onClick={onClose}>
               <Icon icon={'closeAlt'} />
            </Button>
         </StyledModalCloseButton>
      );
   };

   const getModal = () => {
      return (
         <StyledModalWrapper {...props}>
            <StyledModal fullScreen={props.fullScreen} w={props.w} h={props.h}>
               {getCloseButton()}
               {children}
            </StyledModal>
            {!props.fullScreen && <StyledOverlay onClick={onClose ? onClose : () => {}} />}
         </StyledModalWrapper>
      );
   };

   return (
      <Portal modalRoot={modalRoot}>
         <GlobalStyleBodyWithModal isOpen={isOpen} />
         {getModal()}
      </Portal>
   );
};

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
         max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      }),
   ]),

   /**
    * Width of the modal. It can be an object with `min` and `max` keys to set accordingly min-width and max-width.
    */
   w: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.shape({
         min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
         max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      }),
   ]),

   /**
    * Use modal in fullscreen mode
    */
   fullScreen: PropTypes.bool,

   /**
    *
    */
   modalRoot: PropTypes.instanceOf(HTMLElement),

   /**
    * Background overlay color
    */
   overlayColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

   /**
    * If `true` hides the close icon
    */
   hideCloseIcon: PropTypes.bool,
};

Modal.defaultProps = {
   modalRoot: document.body,
   fullScreen: false,
   overlayColor: 'rgba(0, 0, 0, 75%)',
   hideCloseIcon: false,
};
