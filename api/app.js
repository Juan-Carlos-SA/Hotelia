const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path=require("path")

const productosRoutes = require('./routes/Productos.routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static('uploads'));
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use(cors());

//uso de rutas
app.use('/api', productosRoutes);


/*app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })*/

module.exports = app;