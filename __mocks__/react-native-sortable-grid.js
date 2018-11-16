const mock = {
    SortableGrid: 'View'
};

jest.mock('react-native-sortable-grid', () => 'View');

export default mock.SortableGrid;

module.exports = mock;