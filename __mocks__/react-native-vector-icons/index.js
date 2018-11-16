/// <reference types="jest"/>

jest.mock('react-native-vector-icons', () => ({
    MaterialIcons: {
        Button: 'View',
        TabBarItem: 'View',
        TabBarItemIOS: 'View',
        ToolbarAndroid: 'View',
        getImageSource: 'View'
    },
    Octicons: {
        Button: 'View',
        TabBarItem: 'View',
        TabBarItemIOS: 'View',
        ToolbarAndroid: 'View',
        getImageSource: 'View'
    },
    Zocial: {
        Button: 'View',
        TabBarItem: 'View',
        TabBarItemIOS: 'View',
        ToolbarAndroid: 'View',
        getImageSource: 'View'
    },
    MaterialCommunityIcons: {
        Button: 'View',
        TabBarItem: 'View',
        TabBarItemIOS: 'View',
        ToolbarAndroid: 'View',
        getImageSource: 'View'
    }
}));
