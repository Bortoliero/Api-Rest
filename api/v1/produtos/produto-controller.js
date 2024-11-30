const db = require('../../../config/db'); 

// Função para cadastrar um produto
const create = async (request, h) => {

    const {payload} = request;

    try {
        payload.categoriaId = payload.categoria.id;
        const result = await business.create(payload);

        return h.response(result).code(201);
    } catch(error) {
        console.log(error);
    }
}

const findById = async (request, h) => {
    
    const productId = request.params.id;

    return h.response(await business.findById(productId));
}

const getProdutos = async (request, h) => {
    
    const {query} = request;

    const result = await business.list(query);
    return h.response(result).code(200);
}


module.exports = {
    create,
    findById,
    getProdutos
};