import { fontUrl } from '../shared/theme';

// Load the font and avoid re-loading it when components change
const fontLinkId = 'font-link-tag';

export const loadFonts = () => {
  if (!document.getElementById(fontLinkId)) {
    const fontLink = document.createElement('link');

    fontLink.id = fontLinkId;
    fontLink.href = fontUrl;
    fontLink.rel = 'stylesheet';

    document.head.appendChild(fontLink);
  }
};
