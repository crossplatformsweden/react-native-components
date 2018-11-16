// __mocks__/setupTests.js

global.navigator = {
  geolocation: {
    getCurrentPosition: jest.fn(),
    watchPosition: (success, fail) => {
      if (success) {
        success({coords:{latitude: 1, longitude: 1}});
      }
    },
    stopObserving: jest.fn(),
  },
};
