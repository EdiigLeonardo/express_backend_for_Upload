const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    let tematicas = await query(
        "SELECT id as nid, " +
        "slug as slug, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as field_imagem," +
        "capa as field_foto_de_capa " +
        "FROM `tematica`;"
    );
    res.send(tematicas);
});

router.post('/:tipo/:id_video', async function (req, res) {
    let tematica = await query(
        "SELECT id as nid, " +
        "slug as slug, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as field_image," +
        "capa as field_foto_de_capa " +
        "FROM `tematica` WHERE id=?;",[req.params.id_tematica]
    );
    res.send(tematica);
});

module.exports = router;
