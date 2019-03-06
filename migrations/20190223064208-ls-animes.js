'use strict';

var dbm;
var type;
var seed;

const dataId = require('./added/particle').withId;


/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};


exports.up = function (db, callback) {

    dataId.mst_id = {
        type: 'string',
        notNull: true,
        length: 32,
        foreignKey: {
            name: 'ls_animes_kode_foreign',
            table: 'mst_animes',
            rules: {
                onDelete: 'CASCADE',
                onUpdate: 'RESTRICT'
            },
            mapping: 'kode'
        }
    };
    dataId.gambar = {
        type: 'string',
        notNull: true,
    };
    dataId.source = {
        type: 'string',
        notNull: true,
        length:50
    };
    dataId.episode = {
        type: 'float',
        notNull: true,
        length:6
    };

    db.createTable('ls_animes', dataId, function (err) {
        if (err) return callback(err);
        return callback();
    });

};
exports.down = function (db, callback) {
    db.dropTable('ls_animes', callback);
};

exports._meta = {
    "version": 1
};
