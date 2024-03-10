exports.getPessoas = (req, res) => {
    res.status(200).json(
        {
            dados: {
               nome:'vai com calma',
               senha:'*****'

            },
            status: "Login efetuado"
            
        }
       
    );
}
