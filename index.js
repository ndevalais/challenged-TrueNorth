const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});

routerApi(app);

app.listen(port, () => {
    console.log(`Port --> ${port}`);
});

process.on( 'SIGTERM', function () {
    server.close(function () {
      console.log("Finished all requests");
    });
});