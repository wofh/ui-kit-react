import { css } from 'styled-components';
import { responsive } from './styles';

const { breakpoints } = responsive;

export const convertPxToEm = (pixels) => {
   return pixels / 16;
};

export const breakpoint = (gte, lt) => {
   const withSingleCriteria = (name, operator, offset) => {
      const value = breakpoints[name];
      if (operator === 'min-width' && value === 0) {
         return (strings = '') => {
            return strings;
         };
      }

      return (strings = '') => {
         return css`@media (${operator}: ${convertPxToEm(value + offset)}em) {
         ${strings}
      }`;
      };
   };

   const _gte = (name) => {
      return withSingleCriteria(name, 'min-width', +1);
   };

   const _between = (gte, lt) => {
      const gteValue = breakpoints[gte];
      const ltValue = breakpoints[lt];
      return (strings = '') => {
         return css`
            @media (min-width: ${convertPxToEm(gteValue)}em) and (max-width: ${convertPxToEm(
                  ltValue - 1
               )}em) {
               ${strings}
            }
         `;
      };
   };

   if (typeof lt === 'undefined') {
      return _gte(gte);
   } else {
      return _between(gte, lt);
   }
};

export const width = (w) => {
   if (typeof w === 'number') {
      return css`
         width: ${w}px;
      `;
   }

   if (typeof w === 'string') {
      return css`
         width: ${w};
      `;
   }

   if (typeof w === 'object') {
      return css`
         ${w.min &&
         css`
            min-width: ${typeof w.min === 'number' ? w.min + 'px' : w.min};
         `}
         ${w.max &&
         css`
            max-width: ${typeof w.max === 'number' ? w.max + 'px' : w.max};
         `}
      `;
   }

   return css``;
};

export const height = (h) => {
   if (typeof h === 'number') {
      return css`
         height: ${h}px;
      `;
   }

   if (typeof h === 'string') {
      return css`
         height: ${h};
      `;
   }

   if (typeof h === 'object') {
      return css`
         ${h.min &&
         css`
            min-height: ${typeof h.min === 'number' ? h.min + 'px' : h.min};
         `}
         ${h.max &&
         css`
            max-height: ${typeof h.max === 'number' ? h.max + 'px' : h.max};
         `}
      `;
   }

   return css``;
};

export const hexAdjust = (hex, amount = 10) => {
   return '#' + hex.replace(/^#/, '').replace(/../g, hex => ('0' + Math.min(255, Math.max(0, parseInt(hex, 16) + amount)).toString(16)).substr(-2));
}

export const hex2rgba = (hex, alpha = 1) => {
   const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
   return `rgba(${r},${g},${b},${alpha})`;
};

export const hexDarken = (hex, amount = 0.1) => {
   return hexAdjust(hex, amount * -100);
};

export const hexLighten = (hex, amount = 0.1) => {
   return hexAdjust(hex, amount * 100);
};

export const debounce = (cb, wait) => {
   let timeout;

   return (...args) => {
      const later = () => {
         clearTimeout(timeout);
         cb(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
   };
};

export const throttle = (cb, wait) => {
   let throttleTimeout = null;
   let storedEvent = null;

   const throttledEventHandler = (event) => {
      storedEvent = event;

      const shouldHandleEvent = !throttleTimeout;

      if (shouldHandleEvent) {
         cb(storedEvent);

         storedEvent = null;

         throttleTimeout = setTimeout(() => {
            throttleTimeout = null;

            if (storedEvent) {
               throttledEventHandler(storedEvent);
            }
         }, wait);
      }
   };

   return throttledEventHandler;
};

export const toBase64 = (file) =>
   new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
   });
