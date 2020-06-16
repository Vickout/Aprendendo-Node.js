const express = require('express');
const checkListRouter =  require('./src/routes/checklist');

require('./config/database');

const app = express();

app.use(express.json());
// Todas as rotas do checkListRouter são derivadas da rota checklist
app.use('/checklist', checkListRouter);

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})