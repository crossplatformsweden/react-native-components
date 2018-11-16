module.exports = ({
    AccessToken: {
        getCurrentAccessToken: () => {
            return {accessToken: 'fbTokenMock'};
        }
    },
    LoginManager: {
        logInWithReadPermissions: () => {
            return {isCancelled: false};
        }
    },
    LoginButton: 'Button'
})