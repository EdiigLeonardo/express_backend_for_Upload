const express = require('express');
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/canal", require("./pages/canal.js"));
app.use("/playlist", require("./pages/playlist.js"));
app.use("/video", require("./pages/videos.js"));

app.listen(3000, ()=>{
    console.log("Servidor a correr na porta 3000");
});
