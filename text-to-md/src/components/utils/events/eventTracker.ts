import clientNewRelicError from './clientNewRelicError';

declare global {
  interface Window {
    amplitude: any;
    gtag: any;
    hj: any;
  }
}

const eventTracker = (
  provider: 'amplitude',
  eventName: string,
  eventData: any
) => {
  if (!provider) {
    clientNewRelicError('Provider is needed');
    return;
  }

  switch (provider) {
    case 'amplitude':
      if (!window.amplitude) {
        clientNewRelicError('Provider amplitude is not defined');
        break;
      }
      window.amplitude.getInstance().logEvent(eventName, eventData);
      break;
    default:
      clientNewRelicError(`Provider ${provider} is not supported`);
      break;
  }
};

export default eventTracker;
