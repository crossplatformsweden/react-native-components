/// <reference types="jest"/>

const mock = {
    Button: 'View',
    Icon: 'View',
    TabBarItem: 'View',
    TabBarItemIOS: 'View',
    ToolbarAndroid: 'View',
    getImageSource: 'View',
};

jest.mock('react-native-vector-icons/FontAwesome', () => ({
    Button: 'View',
    Icon: 'View',
    TabBarItem: 'View',
    TabBarItemIOS: 'View',
    ToolbarAndroid: 'View',
    getImageSource: 'View',
}));

export default mock;

module.exports = mock;