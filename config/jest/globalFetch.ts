/// <reference types="jest"/>

// Mocking the global.fetch included in React Native
// @ts-ignore
global.fetch = jest.fn();

// Helper to mock a success response (only once)
// @ts-ignore
fetch.mockResponseSuccess = (body) => {
  // @ts-ignore
  fetch.mockImplementationOnce(() =>
    Promise.resolve({ json: () => Promise.resolve(JSON.parse(body)) })
  );
};

// Helper to mock a failure response (only once)
// @ts-ignore
fetch.mockResponseFailure = (error) => {
  // @ts-ignore
  fetch.mockImplementationOnce(() => Promise.reject(error));
};
