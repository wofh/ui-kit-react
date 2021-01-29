import { css } from 'styled-components';
import { responsive } from './styles'

const { breakpoints } = responsive

export const convertPxToEm = (pixels) => {
  return pixels / 16;
}

const withSingleCriteria = (name, operator, offset) => {
  const value = breakpoints[name];
  if (operator === 'min-width' && value === 0) {
    return (strings = '') => {
      return strings;
    }
  }

  return (strings = '') => {
    return css`@media (${operator}: ${convertPxToEm(value + offset)}em) {
         ${strings}
      }`;
  };
}

const _gte = (name) => {
  return withSingleCriteria(name, 'min-width', +1);
}

const _between = (gte, lt) => {
  const gteValue = breakpoints[gte];
  const ltValue = breakpoints[lt];
  return (strings = '') => {
    return css`@media (min-width: ${convertPxToEm(gteValue)}em) and (max-width: ${convertPxToEm(ltValue - 1)}em) {
         ${strings}
      }`;
  };
}

export const breakpoint = (gte, lt) => {

  if (typeof lt === 'undefined') {
    return _gte(gte);
  } else {
    return _between(gte, lt);
  }
}