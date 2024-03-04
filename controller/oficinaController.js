exports.getLogin = (req, res) => {
    res.status(200).json(
        {
            dados: {
               nome:'felipe',
               senha:'*****'

            },
            status: "Login efetuado"
            
        }
       
    );
}



exports.postUsuarios = (req, res) => {
    req.status(201).json(
        {
            dados: {
               nome:req.body
            },
            status: "Usuario salvo"
            
        }
       
    );
}
exports.getUsuarios = (req, res) => {
    {
        
    let dados = [
        {
            id: 22,
            cpf: '00000000000',
            nome:'Fernando'
            
        },
       
        {
            id: 23,
            cpf: '00000000000',
            nome:'Felipe'
        }
        ]
        let pegouNome = dados.filter(nome);
        console.log(pegouNome)
        
    }
    res.status(200).json(
        
        console.log('passei aqui too'),
        /*{
            
            status: "Usuario encontrado",
            
        }
       */
    );
}
exports.getTipoUsuario = (req, res) => {
    res.status(200).json(
        {
            dados: {
                cod: 220,                
                nome:'bucha'
            },
            status: "Peça encontrada"
            
        }
       
    );
}
exports.getPecas = (req, res) => {
    res.status(200).json(
        {
            dados: {
                cod: 220,                
                nome:'bucha'
            },
            status: "Peça encontrada"
            
        }
       
    );
}
exports.getServicos = (req, res) => {
    res.status(200).json(
        {
            dados: {
                cod: 220,                
                nome:'troca de oleo'
            },
            status: "Serviço encontrado"
            
        }
       
    );
}





