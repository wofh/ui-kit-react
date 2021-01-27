import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, color } from '../../shared/styles';

const padding = {
   none: 0,
   xsmall: spacing.padding.xsmall + 'px',
   small: spacing.padding.small + 'px',
   medium: spacing.padding.medium + 'px',
   large: spacing.padding.large + 'px',
};

const StyledBox = styled.div`
   padding: ${(props) => padding[props.pad]};
   ${(props) => props.align && 'text-align: ' + props.align}
   ${(props) =>
      props.background && 'background-color: ' + (color[props.background] || props.background)}
`;

export const Box = (props) => <StyledBox {...props} />;

Box.propTypes = {
   pad: PropTypes.oneOf(Object.keys(padding)),
   align: PropTypes.oneOf(['left', 'center', 'right']),
   background: PropTypes.string,
};

Box.defaultProps = {
   pad: 'small',
};
