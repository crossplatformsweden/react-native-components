const mock = {
    showImagePicker: (options, callback) => {
        callback({
            customButton: '',
            didCancel: false,
            error: '',
            data: '',
            uri: '',
            origURL: '',
            isVertical: false,
            width: 0,
            height: 0,
            fileSize:0,
            type: '',
            fileName: '',
            path:'',
            latitude:0,
            longitude:0,
            timestamp:'',
        });
    }
};

jest.mock('react-native-image-picker', () => ({
    mock
}));

export default mock;

module.exports = mock;