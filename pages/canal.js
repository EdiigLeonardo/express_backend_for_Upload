const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    canais = await query("SELECT * FROM canal");
    res.send(canais);
});

router.get('/:id_canal', async function (req, res) {
   canal = await query(
        "SELECT * FROM canal WHERE id = ?",[req.params.id_canal]);
    res.send(canal);
});

module.exports = router;
