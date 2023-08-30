// analytics.js (Analytics Root File)
import ReactGA from 'react-ga';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-TKRL2H1FM8');
};

// Log Page View
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

// trackEvent function for custom events (optional)
export const trackEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};
