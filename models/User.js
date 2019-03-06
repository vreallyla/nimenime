const Sequelize = require("sequelize");
const db = require("../database/db");

require('dotenv').config();

module.exports = db.sequelize.define(
    'mst_user',
    {
        kode: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },

        nama: {
            type: Sequelize.STRING,
            allowNull: false,
        }
        ,
        'ava': {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tentang: {
            type: Sequelize.STRING
        }, dibuat: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }, dirubah: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },


    },
    {
        timestamps: false
    }
)