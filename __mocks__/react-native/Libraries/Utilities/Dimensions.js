const stub = {
    Platform: {
        OS: 'iOS'
    }
};

jest.mock('react-native/Libraries/Utilities/Dimensions', stub)


module.exports = stub;
