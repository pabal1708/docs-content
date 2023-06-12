import eventTracker from './eventTracker';

const standardCustomEvent = (eventName: string, eventData: any) => {
  // Amplitude
  eventTracker('amplitude', eventName, eventData);
};

export default standardCustomEvent;
