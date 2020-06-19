const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const rootRouter =  require('./src/routes/index');
const checkListRouter =  require('./src/routes/checklist');
const taskRouter =  require('./src/routes/task');

require('./config/database');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

// Todas as rotas do checkListRouter são derivadas da rota checklist --- Middleware
app.use('/', rootRouter);
app.use('/checklists', checkListRouter);
app.use('/checklists', taskRouter.checklistDependent);
app.use('/tasks', taskRouter.simple);

// Setar o caminho das views
app.set('views', path.join(__dirname, 'src/views'));

// instalando o view engine
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})