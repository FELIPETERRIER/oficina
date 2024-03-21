const db = require('../configs/database')

const pessoa = {
    getPessoasModel: async () => {
        try {
            const resultadoPessoas  = await db.query('select * from public.pessoas');
            console.log(resultadoPessoas.rows);
            
            if (resultadoPessoas.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoPessoas.rows;
        } catch (error) {
            throw error;
        }
    },

    savePessoaModel: async(objPessoa) => {
        try {
            let valores = Object.values(objPessoa);
            valores[1] = valores[1].replaceAll('.', '').replaceAll('-', '');

            const salvandoPessoa = await db.query('INSERT INTO pessoas(nome, cpf) VALUES ($1, $2) RETURNING id', valores);

            return salvandoPessoa.rows
        } catch (error) {
            throw error
        }
    }
}

module.exports = pessoa