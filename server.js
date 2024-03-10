const express = require('express');
const app = express();
const port = 3001;
const loginController = require('./controller/loginController');
const usuariosController = require('./controller/usuariosController');
const tipoUsuarioController  = require('./controller/tipoUsuarioController');
const pecasController = require('./controller/pecasController');
const servicosController = require('./controller/servicosController');
const salvarServicosController = require('./controller/salvarServicosController');
const salvarPecasController = require('./controller/salvarpecasController');
const pessoasController = require('./controller/pessoasController');
const salvarPessoasController = require('./controller/salvarPessoasController')
const dotenv = require('dotenv');
dotenv.config();


app.use(express.urlencoded({extended: true}));
app.post('/usuarios', usuariosController.postUsuarios);
app.get('/usuarios/id', usuariosController.getUsuarios);
app.get('/tipoUsuarios', tipoUsuarioController.getTipoUsuario);
app.get('/pecas',pecasController.getPecas);
app.get('/servicos', servicosController.getServicos);
app.get('/', loginController.getLogin);
app.post('/salvarServicos',salvarServicosController.postSalvarServicos);
app.post('/salvarPecas',salvarPecasController.postSalvarPecas);
app.get('/pessoas',pessoasController.getPessoas);
app.post('/salvarpessoas',salvarPessoasController.postSalvarPessoas)

app.listen(port)
