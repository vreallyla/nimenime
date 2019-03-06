'use strict';
const dataId = require('./added/particle').withId;
var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {

  dataId.judul = {
    type: 'string',
    notNull: true,
    length: 50,
  };
  dataId.kode_user = {
    type: 'string',
    notNull: false,
    length: 32,
    foreignKey: {
      name: 'mst_artikels_kode_user_foreign',
      table: 'mst_users',
      rules: {
        onDelete: 'SET NULL',
        onUpdate: 'RESTRICT'
      },
      mapping: 'kode'
    }
  };
  dataId.isi = {
    type: 'text',
    notNull: true,
  };

  dataId.kode_kategori = {
    type: 'string',
    notNull: false,
    length: 32,
    foreignKey: {
      name: 'mst_artikels_kode_kategori_foreign',
      table: 'side_kategoris',
      rules: {
        onDelete: 'SET NULL',
        onUpdate: 'RESTRICT'
      },
      mapping: 'kode'
    }
  };

  db.createTable('mst_artikels', dataId, function (err) {
    if (err) return callback(err);
    return callback();
  });

};
exports.down = function (db, callback) {
  db.dropTable('mst_artikels', callback);
};

exports._meta = {
  "version": 1
};
