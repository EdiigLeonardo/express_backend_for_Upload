const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
   const canais = await query("SELECT * FROM canal");
    res.json(canais);
});

router.get('/:id_canal', async function (req, res) {
   const canal = await query(
        "SELECT * FROM canal WHERE id = ?",[req.params.id_canal]);
    res.json(canal);

});

router.get('/:id_canal/videos', async function (req, res) {
    const videos = await query(
        "SELECT * FROM `video` where canal = ?",[req.params.id_canal]);
    res.json(videos);
});

module.exports = router;
