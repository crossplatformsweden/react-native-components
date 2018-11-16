/// <reference types="jest"/>

jest.mock('react-native-vector-icons/Ionicons', () => ({
    Button: 'View',
    TabBarItem: 'View',
    TabBarItemIOS: 'View',
    ToolbarAndroid: 'View',
    getImageSource: 'View',
}));
