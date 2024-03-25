// db = require('../configs/database');
const tpUsuario = require('../model/tipoUsuarioModel')

const getTpUsuario = async (req, res) => {
    try {

        const todosTpUsuarios = await tpUsuario.getTipoUsuarioModel();
        res.status(200).json(todosTpUsuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const saveTpUsuario = async (req, res) => {
    const usuario = {...req.body}
    try {

        const novoUsuario = await tpUsuario.saveTipoUsuarioModel(usuario);
        res.status(200).json(
            {
                dados: novoUsuario
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
    const delTpUsuario = async (req, res) => {
        const usuario = {...req.body}
        try {
    
            const delUsuario = await tpUsuario.deleteTipoUsuarioModel(usuario);
            res.status(200).json(
                {
                    dados: delUsuario
                }
            );
    
        } catch (error) {
            console.log(error);
            res.status(500).json({
                codigoErro: 500,
                mensagem: error
            });
    
        }
}


module.exports = {getTpUsuario,saveTpUsuario,delTpUsuario}
