const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.handler');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware --
app.use(express.json());

app.get('/', (req, res) => {
    res.send('root');
});

routerApi(app);

// Agrego Middleware de errores
app.use(logErrors);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`PORT --> ${PORT}`);
});

process.on( 'SIGTERM', function () {
    server.close(function () {
      console.log("Finished all requests");
    });
});