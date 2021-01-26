import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { spacing, color } from '../../shared/styles';

const padding = {
   xsmall: spacing.padding.xsmall + 'px',
   small: spacing.padding.small + 'px',
   medium: spacing.padding.medium + 'px',
   large: spacing.padding.large + 'px',
};

const heightObjectStyle = css`
   ${props => props.height.max && css`max-height: ${props.height.max};`}
   ${props => props.height.min && css`min-height: ${props.height.min};`}
`;

const heightStyle = css`
   height: ${props => props.height};
`;

const StyledBox = styled.div`
   padding: ${(props) => padding[props.pad]};
   ${(props) => props.height && typeof props.height === 'object' ? heightObjectStyle : heightStyle}
   ${(props) => props.align && 'text-align: ' + props.align}
   ${(props) =>
      props.background && 'background-color: ' + (color[props.background] || props.background)}
`;

export const Box = (props) => <StyledBox {...props} />;

Box.propTypes = {
   pad: PropTypes.oneOf(Object.keys(padding)),
   align: PropTypes.oneOf(['left', 'center', 'right']),
   height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
         min: PropTypes.string,
         max: PropTypes.string
      })
   ]),
   background: PropTypes.string,
};

Box.defaultProps = {
   pad: 'small',
};
