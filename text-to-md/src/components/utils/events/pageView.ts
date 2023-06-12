import eventTracker from './eventTracker';

const standardPageViewEvent = () => {
  const eventData = {
    hostname: window.location.hostname,
    page_path: window.location.pathname
  };

  // Amplitude
  eventTracker('amplitude', 'page_view', eventData);
};

export default standardPageViewEvent;
