const express = require('express');
const {query} = require("./connection");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    console.log("Recebi um pedido GET");
    res.json({message: "Hello World", query: req.query});
});

app.get('/canal', async function (req, res) {
    let canais = await query(
        "SELECT id as nid, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as user_picture," +
        "capa as field_media_image " +
        "FROM `canal`;"
    );
    console.log(canais);
    res.json(canais);
});

app.listen(3000, ()=>{
    console.log("Servidor a correr na porta 3000");
});

/*
{
        "nid": "24",
        "title": "Classic",
        "field_descricao_": "This is a repository of great classic music created by great classic composers",
        "field_categorias": "beleza",
        "user_picture": "/sites/default/files/styles/large/public/pictures/2023-01/Mozart.jpg?itok=7jnHbjPm",
        "field_media_image": "/sites/default/files/2023-01/piano-1655558.jpg",
        "mid": "102"
    },
 */