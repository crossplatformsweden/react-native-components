

module.exports = {
  Scene: 'View',
  Modal: 'View',
  Router: 'View',
  ActionConst: { FOCUS: 'focus' },
  Actions: {
    create: view => view,
    LoginScreen: () => 'View',
    MapScreen: () => 'View',
    ProfileScreen: () => 'View',
    root: () => 'View',
    push: jest.fn(),
    pop: jest.fn(),
  },
};


