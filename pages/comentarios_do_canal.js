const {query} = require("../connection");
const express = require("express");
const router = express.Router();
const moment = require('moment');

router.get('/:id_canal', async function (req, res) {
    const comentarios = await query("SELECT c.nome, c.email, c.comentario, c.canal " +
        "FROM comentario c INNER JOIN canal cn ON c.canal = cn.id WHERE cn.id = ?", [req.params.id_canal]);
    res.json(comentarios);
});


module.exports = router;