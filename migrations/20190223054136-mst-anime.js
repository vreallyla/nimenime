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

    dataId.kode_user = {
        type: 'string',
        notNull: false,
        length: 32,
        foreignKey: {
            name: 'mst_animes_kode_user_foreign',
            table: 'mst_users',
            rules: {
                onDelete: 'SET NULL',
                onUpdate: 'RESTRICT'
            },
            mapping: 'kode'
        }
    };
    dataId.judul = {
        type: 'string',
        notNull: true,
        length:50
    };
    dataId.gambar = {
        type: 'string',
        notNull: true
    };
    dataId.cover = {
        type: 'string',
        notNull: true
    };
    dataId.tgl_terbit = {
        type: 'date',
        notNull: true,
    };
    dataId.sinopsis = {
        type: 'text',
        notNull: true,
    };

    db.createTable('mst_animes', dataId, function (err) {
        if (err) return callback(err);
        return callback();
    });

};
exports.down = function (db, callback) {
    db.dropTable('mst_animes', callback);
};

exports._meta = {
    "version": 1
};
