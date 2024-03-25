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
        const result = await pesM.savePessoaModel(pessoa);

        res.status(201).json(
            {
                dados: result
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });    }
    
}
/*const deletePessoas = async (req, res) => {
    const pessoa = {...req.body}
    try {
        const result = await pesM.deletePessoaModel(pessoa);
        

        res.status(201).json(
            {
                dados: result
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });    }
    
}*/

module.exports = {getPessoas, savePessoas/*deletePessoas*/}
