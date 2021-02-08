import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { glow } from '../../shared/animation';
import { color } from '../../shared/styles';

const sizes = {
   small: 4,
   medium: 6,
   large: 8,
};

const StyledProgressDots = styled.div`
   display: inline-block;
   line-height: 1;
   font-size: ${(props) => sizes[props.size] || props.size}px;
`;

const Dot = styled.div`
   background: ${color.medium};
   display: inline-block;
   vertical-align: top;
   width: ${(props) => sizes[props.size] || props.size}px;
   height: ${(props) => sizes[props.size] || props.size}px;
   border-radius: 3em;
   margin: 0 ${(props) => (sizes[props.size] || props.size) * 0.5}px;

   ${(props) =>
      props.active &&
      css`
         background: ${color.mediumdark};
      `};

   ${(props) =>
      props.isLoading &&
      css`
         animation: ${glow} 1.5s ease-in-out infinite;
         &:nth-child(1) {
            animation-delay: 0s;
         }
         &:nth-child(2) {
            animation-delay: 0.3s;
         }
         &:nth-child(3) {
            animation-delay: 0.6s;
         }
         &:nth-child(4) {
            animation-delay: 0.9s;
         }
      `};
`;

export const ProgressDots = ({ isLoading, steps, progress, size, className }) => {
   const dots = [];
   for (let i = 0; i < steps; i += 1) {
      dots.push(<Dot isLoading={isLoading} active={i === progress - 1} key={i} size={size} />);
   }
   return (
      <StyledProgressDots className={className} size={size}>
         {dots}
      </StyledProgressDots>
   );
};

ProgressDots.propTypes = {
   isLoading: PropTypes.bool,
   steps: PropTypes.number,
   progress: PropTypes.number,
   className: PropTypes.string,
   size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ProgressDots.defaultProps = {
   isLoading: false,
   steps: 4,
   progress: 0,
   className: null,
   size: 'small',
};
