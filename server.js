const express = require('express'); //Requerimos el paquete de express
const app = express();				//Declara la funcion express dentro del paquete de espress
 
const hbs = require('hbs');
require('./hbs/helpers');

//OBTENER EL PUERTO DEL SERVIDOR
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS ENGINE
hbs.registerPartials( __dirname + '/views/parciales' );				//Los partials son bloque de codigos reutilizables de html 
app.set('view engine', 'hbs');


app.get('/',  (req, res) => {  //Se config. una solicitud Get, cuando la url sea un /, ejecuta la funcion
	// res.send('Hola Mundo')

	res.render('home',{
		nombre: 'felix deliso'
	});     //La funcion send del paquete express, reconoce autom. que la variable salida es unjson y lo decodifica
	
})

app.get('/about',  (req, res) => {  //Se config. una solicitud Get, cuando la url sea un /, ejecuta la funcion
	// res.send('Hola Mundo')

	res.render('about');     //La funcion send del paquete express, reconoce autom. que la variable salida es unjson y lo decodifica
	
})
 
app.listen(port, () => {
	console.log('Escuchando peticiones en el puerto', port); 
});