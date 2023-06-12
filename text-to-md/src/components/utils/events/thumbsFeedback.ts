import eventTracker from './eventTracker';

const thumbsFeedback = (thumb: string) => {
  const eventData = {
    hostname: window.location.hostname,
    page_path: window.location.pathname
  };

  // Amplitude
  eventTracker('amplitude', `feedback_${thumb}`, eventData);
};

export default thumbsFeedback;
