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

const deleteById = async (request, h) => {
    const productId = request.params.id;
    
    try {
        await business.deleteById(productId);

        return h.response({}).code(204);
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    create,
    findById,
    getProdutos,
    deleteById
};