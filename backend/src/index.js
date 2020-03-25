const express = require('express'); // importando as funcionalidades do express
const routes = require('./routes'); // = = = == = = = ======= de routes
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); // acessar a aplicação na web





