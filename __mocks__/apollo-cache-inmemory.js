const mock = {
    read: () => { },
    write: () => { },
    diff: () => { },
    watch: () => { },
    evict: () => { },
    reset: () => { },
    removeOptimistic: () => { },
    performTransaction: () => { },
    recordOptimisticTransaction: () => { },
    transformDocument: () => { },
    readQuery: () => { },
    readFragment: () => { },
    writeQuery: () => { },
    writeFragment: () => { },
};

module.exports = { InMemoryCache: () => mock };