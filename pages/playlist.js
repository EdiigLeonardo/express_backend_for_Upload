const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    let playlists = await query(
        "SELECT id as nid, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as user_picture," +
        "capa as field_media_image " +
        "FROM `canal`;"
    );
    res.send(playlists);
});

router.get('playlists/:id_playlist', async function (req, res) {
    let playlists = await query(
        "SELECT id as nid, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as user_picture," +
        "capa as field_media_image " +
        "FROM `canal` WHERE id=?;",[req.params.id_playlist]
    );
    res.send(playlists);
});

module.exports = router;
