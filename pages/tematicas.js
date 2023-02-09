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

router.get('/:identifier', async function (req, res) {
    let identifier = req.params.identifier;
    let sqlQuery = "SELECT id as nid, " +
        "slug as slug, " +
        "nome as title, " +
        "descricao as field_descricao_, " +
        "imagem as field_image," +
        "capa as field_foto_de_capa " +
        "FROM `tematica`"
    //verificar se é id:
    if(isNaN(parseInt(identifier))) {
        //e um slug
        sqlQuery += " WHERE slug = ?"
    } else {
        //e id
        sqlQuery += " WHERE id = ?"
    }
    let tematica = await query(sqlQuery,[identifier]);
    res.json(tematica);
});


module.exports = router;
