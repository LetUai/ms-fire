const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express()

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
res.send('ok');
});

require('./controlers/index')(app)

app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`);
  });