const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    let canais = await query(
        "SELECT id as nid, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as user_picture," +
        "capa as field_media_image " +
        "FROM `canal`;"
    );
    res.send(canais);
});

router.get('/?:id_canal', async function (req, res) {
    let canais = await query(
        "SELECT id as nid, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as user_picture," +
        "capa as field_media_image " +
        "FROM `canal` WHERE id=?;",[req.params.id_canal]
    );
    res.send(canais);
});

module.exports = router;
