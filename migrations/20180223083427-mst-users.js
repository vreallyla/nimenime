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

  dataId.nama = {
    type: 'string',
    notNull: true,
    length: 50,

  };
  dataId.ava = {
    type: 'string',
    notNull: false,
    length: 100,

  };
  dataId.email = {
    type: 'string',
    notNull: true,
    length: 50,
    unique:true
  };
  dataId.password = {
    type: 'string',
    notNull: true,
    length: 32,
  };
  dataId.tentang = {
    type: 'text',
    notNull: false,
  };

  db.createTable('mst_users', dataId, function (err) {
    if (err) return callback(err);
    return callback();
  });

};
exports.down = function (db, callback) {
  db.dropTable('mst_users', callback);
};

exports._meta = {
  "version": 1
};
