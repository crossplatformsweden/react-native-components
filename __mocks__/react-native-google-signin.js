module.exports = {
  GoogleSigninButton: {
    Size: {
      View: '1',
    },
    Color: { Dark: '2' },
  },
  GoogleSignin: {
    hasPlayServices: () => true,
    configure() {},
    signIn() {
      return {
        idToken: 'id',
        name: 'test',
        photo: 'http://www.crossplatform,se/',
      };
    },
  },
};
