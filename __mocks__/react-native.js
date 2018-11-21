module.exports = ({
  StyleSheet: {
    create: (styles) => styles,
  },
  Platform: {
    OS: 'ios',
  },
  Dimensions: {
    get: () => ({
      width: 1,
      height: 1,
    }),
  },
  View: 'View',
  Text: 'Text',
  Button: 'Button',
  ScrollView: 'View',
  Linking: { openURL: (url) => {console.log('Lingking.openURL', url)}},
  AsyncStorage: {
    setItem: () => new Promise((resolve) => resolve(), null),
    getItem: (key) =>
      new Promise((resolve) => resolve(`{"key": "${key}"}`), null),
    removeItem: (key, callback) => {
      if (callback) {
        callback();
      }
      return new Promise((resolve) => resolve(), null);
    },
  },
  Animated: {
    View: 'View',
    Value: jest.fn()
  },
  PanResponder: {
    create: () => 'View'
  },
  PanResponderInstance: 'View',
  TouchableOpacity: 'View',
  FlatList: 'View',
});
