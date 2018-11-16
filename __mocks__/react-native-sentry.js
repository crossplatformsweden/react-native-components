const SentryMock = {
  Sentry: {
    install: () => {},
    config: () => {
      return {
        install: () => {},
      };
    },
    captureException: () => {},
  },
};

module.exports = SentryMock;