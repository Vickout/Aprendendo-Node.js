const express = require('express');
const path = require('path');

const checkListRouter =  require('./src/routes/checklist');
const rootRouter =  require('./src/routes/index');

require('./config/database');

const app = express();

app.use(express.json());
// Todas as rotas do checkListRouter são derivadas da rota checklist --- Middleware
app.use('/', rootRouter);
app.use('/checklist', checkListRouter);
// Setar o caminho das views
app.set('views', path.join(__dirname, 'src/views'));
// instalando o view engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})