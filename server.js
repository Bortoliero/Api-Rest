const Hapi = require("@hapi/hapi");
const routes = require("./config/routes");
const config = require('./config/envs-config');
const produtosRoutes = require('./api/produtos/produtos.routes');


const server = Hapi.server({
    port: config.port,
    host: config.host
});


routes.forEach((path) => server.route(path));

app.use('/api/produtos', produtosRoutes);


module.exports = server;