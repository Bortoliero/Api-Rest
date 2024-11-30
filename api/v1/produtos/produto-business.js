const repository = require('./produto-repository')

const create = async (produto) => {

    //logica negocio
    return repository.save(produto);
}

const list = async (filter) => {
    return repository.findAll(filter);
}

const findById = async (id) => {
    return repository.findById(id);
}

const deleteById = async (id) => {
    repository.deleteById(id);
}

module.exports = {
    create,
    list,
    findById,
    deleteById
}