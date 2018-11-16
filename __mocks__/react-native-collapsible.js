const mock = {
    Collapsible: 'View'
};

jest.mock('react-native-collapsible', () => ({
    Collapsible: 'View'
}));

export default mock.Collapsible;

module.exports = mock;