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
    }
}

module.exports = pessoa