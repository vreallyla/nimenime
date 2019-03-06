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
  dataId.url = {
    type: 'string',
    notNull: false,
  };

  db.createTable('ls_links', dataId, function (err) {
    if (err) return callback(err);
    return callback();
  });

};
exports.down = function (db, callback) {
  db.dropTable('ls_links', callback);
};

exports._meta = {
  "version": 1
};
