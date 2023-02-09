const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    let playlists = await query( "SELECT * FROM PLAYLIST");
    res.send(playlists);
});

router.get('/:id_playlist', async function (req, res) {
        playlist = await query("SELECT * FROM PLAYLIST_VIDEO WHERE PLAYLIST = ?",[req.params.id_playlist]
    );
    res.send(playlist);
});

module.exports = router;
