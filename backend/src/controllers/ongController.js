const connection = require('../database/conection');
const crypto = require('crypto');

// Criando a rota principal, passando uma função como parametro.
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        const {name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        // vai aguarda o codigo finalizar "await"
        await  connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
}