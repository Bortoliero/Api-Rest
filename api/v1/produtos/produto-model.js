const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Categoria = require('../categoria-model');

const produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'codigo' //nome do atributo do banco
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'desc_prod'
    },
    value: {
        type: Sequelize.DECIMAL(15,2),
        field: 'vl_unit'
    },
    quantity: {
        type: Sequelize.INTEGER,
        field: 'qtd'
    },
    categoriaId: {
        type: Sequelize.INTEGER,
        field: 'cod_cat',
        references: {
            model: 'Categoria',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'tb_produto'
});

Produto.belongsTo(Categoria, {foreignKey: 'categoriaId'});

module.exports = Produto;