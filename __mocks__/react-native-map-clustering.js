const mock = {
  MapView: 'View',
};

jest.mock('react-native-map-clustering', () => 'View');

export default mock.MapView;

module.exports = mock;
