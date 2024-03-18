const client = require('../database/db')


exports.getTipoUsuario = async (req, res) => {
    try {
        const tipos  = await client.query('select * from public.tipos_pessoa')
        console.log(tipos.rows);
        res.status(200).json(
            tipos.rows
        );       
    } catch (error) {
        console.log(error)
    }
   
}
