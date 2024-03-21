const pesM = require('../model/pessoaModel');

const getPessoas = async (req, res) => {
    try {
        
        const todasPessoas = await pesM.getPessoasModel();
        res.status(200).json(todasPessoas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const savePessoas = async (req, res) => {
    const pessoa = {...req.body}
    try {
        const sqlInsert = 'INSERT INTO pessoas(nome, cpf) VALUES ($1, $2) RETURNING id';
        let valores = Object.values(pessoa);
        valores[1] = valores[1].replaceAll('.', '').replaceAll('-', '');

        const result = await db.query(sqlInsert, valores)

        console.log(result.rows);

        res.status(200).json(
            {
                dados: result.rows
            }
        );

    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {getPessoas, savePessoas}
