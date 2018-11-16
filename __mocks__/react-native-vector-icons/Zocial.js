/// <reference types="jest"/>

jest.mock('react-native-vector-icons/Zocial', () => ({
    Button: 'View',
    TabBarItem: 'View',
    TabBarItemIOS: 'View',
    ToolbarAndroid: 'View',
    getImageSource: 'View',
}));
