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


module.exports = {
    create
};