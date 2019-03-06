'use strict';

var dbm;
var type;
var seed;
const dataId = require('./added/particle').withId;
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

  dataId.email = {
    type: 'string',
    notNull: true,
    length: 50,

  };
  dataId.nama = {
    type: 'string',
    notNull: true,
    length: 50,

  };
  dataId.desk= {
    type: 'boolean',
    defaultValue:true
  };

  dataId.kode_series = {
    type: 'string',
    notNull: true,
    length: 32,
    foreignKey: {
      name: 'mst_links_rusaks_kode_series_foreign',
      table: 'ls_animes',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: 'kode'
    }
  };
  db.createTable('mst_link_rusaks', dataId, function (err) {
    if (err) return callback(err);
    return callback();
  });

};
exports.down = function (db, callback) {
  db.dropTable('mst_link_rusaks', callback);
};

exports._meta = {
  "version": 1
};
