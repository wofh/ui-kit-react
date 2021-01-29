import { useState, useRef, useEffect } from 'react'

/**
 * This hook is used to capture a click event outside the ref element. Used inside the `Dropdown` component.
 */
export default function useVisible(initialIsVisible) {
   const [isVisible, setIsVisible] = useState(initialIsVisible);
   const ref = useRef(null);

   const handleHideDropdown = (event) => {
      if (event.key === 'Escape') {
         setIsVisible(false);
      }
   };

   const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
         setIsVisible(false);
      }
   };

   useEffect(() => {
      document.addEventListener('keydown', handleHideDropdown, true);
      document.addEventListener('click', handleClickOutside, true);
      return () => {
         document.removeEventListener('keydown', handleHideDropdown, true);
         document.removeEventListener('click', handleClickOutside, true);
      };
   });

   return [ref, isVisible, setIsVisible];
}
