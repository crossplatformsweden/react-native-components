const mock = {
    Collapsible: 'View'
};

jest.mock('react-native-modal-datetime-picker', () => 'View');

export default mock.Collapsible;

module.exports = mock;