/// <reference types="jest"/>

jest.mock('react-native-vector-icons/SimpleLineIcons', () => ({
    Button: 'View',
    TabBarItem: 'View',
    TabBarItemIOS: 'View',
    ToolbarAndroid: 'View',
    getImageSource: 'View',
}));
