const stub = {
  __packager_asset: true,
  fileSystemLocation: '/full/path/to/directory',
  httpServerLocation: '/assets/full/path/to/directory',
  width: 100,
  height: 100,
  scales: [1, 2, 3],
  hash: 'nonsense',
  name: 'icon',
  type: 'png',
};

jest.mock('react-native/Libraries/Image/RelativeImageStub', stub)


module.exports = stub;
