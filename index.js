const app = require('./config/server');
const routes = require('./routes/routes');


routes.home(app);
routes.votar(app);
routes.exibirMaisVotado(app);