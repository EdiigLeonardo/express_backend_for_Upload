const {query} = require("../connection");
const express = require("express");
const router = express.Router();
const moment = require('moment');

router.get('/:id_video', async function (req, res) {
    const comentarios = await query("SELECT c.nome, c.email, c.comentario, c.canal " +
        "FROM comentario c INNER JOIN video v ON c.video = v.id WHERE v.id =?", [req.params.id_video]);
    res.json(comentarios);
});



module.exports = router;