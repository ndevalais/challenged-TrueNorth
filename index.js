const express = require('express');
const routerApi = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware --
app.use(express.json());

app.get('/', (req, res) => {
    res.send('root');
});

routerApi(app);

app.listen(PORT, () => {
    console.log(`PORT --> ${PORT}`);
});

process.on( 'SIGTERM', function () {
    server.close(function () {
      console.log("Finished all requests");
    });
});