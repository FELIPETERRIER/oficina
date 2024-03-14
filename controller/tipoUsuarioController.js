const client = require('../database/db')


exports.getTipoUsuario = (req, res) => {
     try{
        client.connect()
        const res =client.query('select * from tipos_pessoa')
        console.log(res.rows);
        client.end()
        
    }catch(error){
        console.log(error)
    }

    res.status(200).json(
        {
            dados: {
              
            },
            status: ""
            
        }
       
    );
}