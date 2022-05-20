const express = require("express");
const path = require("path");
__dirname = path.resolve(path.dirname(""));
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "images")));
app.use(express.static(path.resolve(__dirname, "src")));



// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(process.env.PORT || 3000, () => console.log("Server running ..."));
