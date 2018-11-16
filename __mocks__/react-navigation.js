

const navMock = () => ({
  router: {
    getActionForPathAndParams: jest.fn(),
    getStateForAction: jest.fn(),
  },
}
);

module.exports = ({
  createStackNavigator: () => 'View',
  addNavigationHelpers: jest.fn(),
  StackNavigator: navMock,
  TabNavigator: navMock,
  NavigationBottomTabScreenOptions: {},
  NavigationActions: { back: jest.fn(), navigate: jest.fn() },
});


