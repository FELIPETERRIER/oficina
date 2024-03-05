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