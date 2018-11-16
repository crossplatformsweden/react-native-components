/// <reference types="jest"/>

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => ({
    Button: 'View',
    TabBarItem: 'View',
    TabBarItemIOS: 'View',
    ToolbarAndroid: 'View',
    getImageSource: 'View',
}));
