const express = require('express');
const app = express();
const port = 3001;
const oficinaController = require('./controller/oficinaController');


app.use(express.urlencoded({extended: true}));
app.post('/usuarios', oficinaController.postUsuarios);
app.get('/usuarios:id', oficinaController.getUsuarios);
app.get('/tipoUsuarios', oficinaController.getTipoUsuario);
app.get('/pecas', oficinaController.getPecas);
app.get('/servicos', oficinaController.getServicos);
app.get('/', oficinaController.getLogin);

app.listen(port)
