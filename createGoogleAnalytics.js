import GoogleAnalytics from 'nextjs-google-analytics';

export function createGoogleAnalytics({
  trackingId,
  anonymizeIp = false,
  disableCookies = false,
  pageViewOnLoad = true,
  trackCustomEvents = false,
  defaultTracker = false,
  transport = 'https://www.maniwebdev.com/',
}) {
  return new GoogleAnalytics({
    trackingId,
    anonymizeIp,
    disableCookies,
    pageViewOnLoad,
    trackCustomEvents,
    defaultTracker,
    transport,
  });
}