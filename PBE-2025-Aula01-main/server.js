const express = require('express');
const cors = require('cors');
const app = express();
const descontoRouter = require('./Desconto/index');

const aumentofilhos = require('./Salario Familia/index');

const inss = require('./ex1/index');

const triangulo = require('./ex2/index');

const calaumento = require('./ex3/index');

const maiornumero = require('./ex4/index');

const ordenarnumero = require('./ex5/index');

const verificarMaiorEMenor = require('./ex6/index');

const calcularReajuste = require('./ex7/index');

const calcularMedia = require('./ex8/index');

const calcularDesconto = require('./ex9/index');


//apps
app.use(cors());
app.use(express.json());

app.use('/desconto', descontoRouter);

app.use('/reajustar', aumentofilhos);

app.use('/inss', inss);

app.use('/triangulo', triangulo);

app.use('/calaumento', calaumento);

app.use('/maiornumero', maiornumero);

app.use('/ordenarnumero', ordenarnumero);

app.use('/verificarMaiorEMenor', verificarMaiorEMenor);

app.use('/calcularReajuste', calcularReajuste);

app.use('/calcularMedia', calcularMedia);

app.use('/calcularDesconto', calcularDesconto);
//fim apps

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});
