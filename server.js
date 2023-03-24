const express = require('express') //Importamos la dependencia.
const app = express() //Declaramos una App de Express
const port = process.env.Port || 3000; //Definicion del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

// Especifica que vamos a "parsear" peticiones URLencoded (Datos dentro del body)
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/student', (req, res) => {
  let t = req.params.id;
  res.render('student');
});

app.post('/addStudent', (req, res) => {
  res.render('displayData', {
  nombre: req.body.nombre,
  edad: req.body.edad,
  nss: req.body.nss,
  tipoSangre: req.body.tipoSangre});
});

app.listen(port);

