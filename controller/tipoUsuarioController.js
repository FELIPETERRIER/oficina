const {Client}= require('pg');
const dotenv = require('dotenv');
const con = async()=>{
    try{
        const client = new Client({
            user:'postgres',
            host:'localhost',
            database:'MyDB',
            password:'elefante',
            port:5432
        })
        await client.connect()
        const res = await client.query('select * from tipos_pessoa')
        console.log(res.rows);
        await client.end()
        
    }catch(error){
        console.log(error)
    }

}
con()
exports.getTipoUsuario = (req, res) => {
    res.status(200).json(
        {
            dados: {
              
            },
            status: ""
            
        }
       
    );
}