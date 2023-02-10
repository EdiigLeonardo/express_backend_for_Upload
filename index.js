const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/canal", require("./pages/canal.js"));
app.use("/playlist", require("./pages/playlist.js"));
app.use("/tematica", require ("./pages/tematicas.js"));
app.use("/video", require ("./pages/videos.js"));
//app.use("/tag", require ("./pages/tags.js"));
app.use("/comentarios_do_video", require("./pages/comentarios_do_video.js"));
app.use("/comentarios_do_canal", require("./pages/comentarios_do_canal.js"));
app.use("/tematica_sugerida", require ("./others/tematica_sugerida.js"));
app.use("/tags", require("./others/tags.js"));

app.listen(3000, ()=>{
    console.log("Servidor a correr na porta 3000");
});
