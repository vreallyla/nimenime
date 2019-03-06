const withoutId = {
    dibuat: {
        type: 'timestamp',
        notNull: false,
    },
    dirubah: {
        type: 'timestamp',
        notNull: false,
    }
};

const withId = withoutId;

withId.kode = {
    type: 'string',
    length: 32,
    primaryKey: true,
    notNull: true,
};

module.exports = {
    withoutId: withoutId,
    withId: withId
};