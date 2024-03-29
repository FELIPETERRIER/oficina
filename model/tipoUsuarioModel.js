const db = require('../configs/database');

const tipoUsuario = {
    getTipoUsuarioModel: async () => {
        try {
            const resultadoTipoUsuario  = await db.query('select * from public.tipos_pessoa');
            console.log(resultadoTipoUsuario.rows);
            
            if (resultadoTipoUsuario.rowCount == 0) {
                throw "Nenhuma pessoa encontrada"
            }
            return resultadoTipoUsuario.rows;
        } catch (error) {
            throw error;
        }
    },
    saveTipoUsuarioModel: async (objUsuario) => {
        
        try {
            let valoresUsuario = Object.values(objUsuario)
            const addTipoUsuario  = await db.query('INSERT INTO tipos_pessoa(funcao) VALUES ($1) RETURNING id', valoresUsuario);
            console.log(addTipoUsuario.rows);

            return addTipoUsuario.rows
            
           
        } catch (error) {
            throw error;
        }
        
    },
    deleteTipoUsuarioModel: async (id) => {
        
        try {
            
            let delValoresUsuario = Object.values(id)
            console.log(delValoresUsuario)
            const delTipoUsuario  = await db.query('DELETE from tipos_pessoa WHERE id = $1', delValoresUsuario  );
            console.log(delTipoUsuario);

            return delTipoUsuario
            
           
        } catch (error) {
            throw error;
        }
        
    },
    
    putTipoUsuarioModel: async (id) => {
        
        try {
            
            let putValoresUsuario = Object.values(id);
            console.log(putValoresUsuario)
            const putTipoUsuario  = await db.query('update tipos_pessoa set funcao = $2 where id = $1 ',putValoresUsuario);
            console.log(putTipoUsuario);

            return putTipoUsuario
            
           
        } catch (error) {
            throw error;
        }
        
    }
    
}

module.exports = tipoUsuario
