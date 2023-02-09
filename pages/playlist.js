const {query} = require("../connection");
const express = require("express");
const router = express.Router();

router.get('/', async function (req, res) {
    const playlists = await query( "SELECT * FROM PLAYLIST");
    res.json(playlists);
});

router.get('/:id_playlist', async function (req, res) {
        const playlist = await query(`SELECT video.titulo as name, video.miniatura as thumbnail,
        data_publicacao, imagem, 
        video.id as video_id, playlist.id as playlist_id FROM \`playlist_video\` 
        INNER JOIN playlist ON playlist.id = playlist_video.playlist
        INNER JOIN video ON video.slug = playlist_video.video
        WHERE playlist_video.playlist = ?`,[req.params.id_playlist]
    );
    res.json(playlist);
});

module.exports = router;
