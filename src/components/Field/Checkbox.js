import React, { useRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, spacing, typography } from '../../shared/styles';
import { hex2rgba } from '../../shared/mixins';

const StyledLabel = styled.span`
   display: inline-block;
   font-size: ${typography.size.s3}px;
   line-height: 1.5;
   margin-left: ${spacing.margin.small}px;
`;

const Icon = styled.svg`
   fill: none;
   stroke: #000;
   stroke-width: 3px;
`;

const checkedStyles = css`
   background-color: ${color.primary};

   ${Icon} {
      visibility: visible;
      stroke: #fff;
   }
`;
const uncheckedStyles = css`
   box-shadow: inset 0 0 0 1px ${color.mediumdark};

   ${Icon} {
      visibility: hidden;
   }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
   border: 0;
   clip: rect(0 0 0 0);
   clippath: inset(50%);
   height: 1px;
   margin: -1px;
   overflow: hidden;
   padding: 0;
   position: absolute;
   white-space: nowrap;
   width: 1px;
`;

const StyledCheckbox = styled.div`
   display: inline-block;
   width: 18px;
   height: 18px;
   border-radius: ${spacing.borderRadius.xsmall}px;
   transition: all 150ms;
   padding: 2px;
   line-height: 1;

   ${HiddenCheckbox}:focus + & {
      box-shadow: inset 0 0 0 1px ${hex2rgba(color.primary, 0.4)},
         0 0 0 3px ${hex2rgba(color.primary, 0.4)};
   }

   ${(props) => (props.checked ? checkedStyles : uncheckedStyles)}
`;

const CheckboxContainer = styled.div`
   display: inline-block;
   vertical-align: middle;
`;

export const Checkbox = ({ checked, ...props }) => {
   const ref = useRef(null);

   console.log(props);

   return (
      <CheckboxContainer>
         <label>
            <HiddenCheckbox ref={ref} {...props} checked={checked} />
            <StyledCheckbox checked={checked}>
               <Icon viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
               </Icon>
            </StyledCheckbox>
            {props.label && <StyledLabel>{props.label}</StyledLabel>}
         </label>
      </CheckboxContainer>
   );
};

Checkbox.propTypes = {
   inline: PropTypes.bool,
   checked: PropTypes.bool,
};

Checkbox.defaultProps = {
   inline: false,
   checked: false,
};
