const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/canais', async function (req, res) {
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

router.get('canal/?:id_canal', async function (req, res) {
    let canal = await query(
        "SELECT id as nid, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as user_picture," +
        "capa as field_media_image " +
        "FROM `canal` WHERE id=?;",[req.params.id_canal]
    );
    res.send(canal);
});

module.exports = router;
