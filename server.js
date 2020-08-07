let bodyParser = require('body-parser')
let mongoose = require('mongoose');
let app = require('express')();
let http = require('http').Server(app);
let cors = require('cors')

let listRoutes = require("./routes/listRoute")
let commentaireRoutes = require("./routes/commentaireRoute")
let userRoutes = require("./routes/userRoute")
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology: true});
var db = mongoose.connection;

if(!db)
    console.log("error db connect")
else 
    console.log("succes db connect");

var port = process.env.PORT || 5000;

app.use(cors());
app.use('/', listRoutes);
app.use('/', commentaireRoutes);
app.use('/', userRoutes);
http.listen(port, () => {
    console.log("Running matchaback on port " + port);
});

