const repository = require('./produto-repository')

const create = async (produto) => {

    return repository.save(produto);
}

const list = async (filter) => {
    const { categoria, nome, quantidade } = filter;

    return produtoModel.findAll({
        include: [{
            model: Categoria,
            required: categoria ? true : false, // Faz INNER JOIN apenas se 'categoria' for fornecida
            where: categoria ? { name: { [Op.iLike]: `${categoria}%` } } : undefined
        }],
        where: {
            ...(nome ? { nome: { [Op.iLike]: `${nome}%` } } : {}),
            ...(quantidade ? { quantidade }: {})
        }
    });
};


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