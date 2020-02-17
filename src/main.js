let express = require('express');
let path = require('path');

let app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

app.get("/", (req, res) => {
    res.render("homepage");
});

app.listen(8080);