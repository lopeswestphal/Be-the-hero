const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

// Exportando uma variavel de um arquivo
module.exports = routes; 

/*
 > Rota: e o caminho completo / Recurso: e onde vc quer chegar
*/ 

/*
> Metodos HTTP:
>
> GET: Buscar/listas uma informação do back-end
> POST: Criar uma informção no back-end
> PUT: Alterar uma informação no back-end
> DELETE: Deletar  = = = = = = = = == == =
*/

/*
> Tipos De Parâmetros:
>
> Query Params: Parâmetros nomeados enviados na rota apos "?" (Filtros, Paginação ...)
> Route Params: Parâmetros utilizados para indentificar recursos "/:id" ".params"
> Request Body: Corpo da requisisão, utilizado para criar ou alterar recursos 
*/

/** 
 * SQL: MySQL, Oracle, Microsoft SQL Sever, SQLlite.
 * NoSQL: MongoDB, etc..
 * Comunicação: 1.Driver -> Select * FROM users / 2.Query Builder -> table('users').select('*').where() 
*/
