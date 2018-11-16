module.exports = {
  Auth: {
    signUp: jest.fn(),
    signIn: jest.fn(),
    resendSignUp: jest.fn(),
    forgotPassword: jest.fn(),
    forgotPasswordSubmit: jest.fn(),
    currentSession: jest.fn(),
    currentUserInfo: jest.fn(),
    confirmSignUp: jest.fn(),
    confirmSignIn: jest.fn(),
    signOut: jest.fn(),
    currentAuthenticatedUser: jest.fn(),
    changePassword: jest.fn(),
  },
};

export default {
  configure: jest.fn(),
};
