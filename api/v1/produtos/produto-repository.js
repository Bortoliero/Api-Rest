const produtoModel = require('./produto-model');
const {Op} = require('sequelize');
const Category = require('../category/category-model');



const save = async (produto) => {
    return produtoModel.create(produto);
}

const findAll = async (filter) => {
    const {name, quantity} = filter;

    return produtoModel.findAll({
        include: [{
            model: Category,
            required: true //inner
        }],
        where: {
            ...(name) ? {name: {[Op.iLike]: `${name}%`}} : {},
            ...(quantity) ? {quantity}: {}
        }
    });
}

const findById = async (id) => {
    return produtoModel.findOne({
        include: [ {
            model: Category,
            required: false //left
        }],
        where: {
            id: id
        }
    })
}

const deleteById = async (id) => {

    produtoModel.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    save,
    findAll,
    findById,
    deleteById
}