'use strict';

var dbm;
var type;
var seed;
const dataId={};
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

  dataId.kode_streaming = {
    type: 'string',
    notNull: true,
    length: 32,
    foreignKey: {
      name: 'rs_streamings_kode_streaming_foreign',
      table: 'mst_genres',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: 'kode'
    }

  };
  dataId.kode_anime = {
    type: 'string',
    notNull: true,
    length: 32,
    foreignKey: {
      name: 'rs_streamings_kode_anime_foreign',
      table: 'ls_animes',
      rules: {
        onDelete: 'CASCADE',
        onUpdate: 'RESTRICT'
      },
      mapping: 'kode'
    }
  };

  db.createTable('rs_streamings', dataId, function (err) {
    if (err) return callback(err);
    return callback();
  });

};
exports.down = function (db, callback) {
  db.dropTable('rs_streamings', callback);
};

exports._meta = {
  "version": 1
};
