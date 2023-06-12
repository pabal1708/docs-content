declare global {
  interface Window {
    newrelic: any;
  }
}

const clientNewRelicError = (errorMessage: string) => {
  if (window.newrelic) {
    window.newrelic.noticeError(errorMessage);
  }
};

export default clientNewRelicError;
