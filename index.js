const express = require('express');
const app = express(); //con esto creo mi servidor
const morgan = require('morgan');

//settings
app.set('PORT', 3000);

app.set('view engine', 'ejs'); //motor de plantillas

//middleware
app.use(express.json()); //siempre entra aqui y convierte la informacion para json y poderla procesar

app.use(morgan('dev'));     //morgan supple la funcion logger y app.all para ver todas mis peticiones
//primero pasa por este middleware
// function logger(req, res, next) {
    //     console.log(`Ruta recibida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    //     next();
    // }
    
    
// app.all('/', (req, res, next) => {
    //     console.log('siempre entrara');
//     next();
// });

// app.use(logger);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

//routes
app.get(('/user') , (req, res) => {
    res.json({
        user: 'yorsh',
        apellido: 'Reynoso'
    });
});

app.post('/about', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('peticion post, envio formulario');
});

app.post('/user/:id', (req, res) => {
    const param = req.params;
    const body = req.body;
    console.log(body, param );
    
    res.send('peticion post, envio formulario');
});

app.put('/contact/:id', (req, res) => {
    const body = req.body;
    const {id} = req.params;
    console.log(`se actulizo la informacion con id ${id}`);
    console.log(body);
    res.send('se actualizo la informacion');
});

app.delete('/user/:userId', (req, res) => {
    const params = req.params;
    console.log(`se elimino el usuario ${params.userId} con exito`);
    res.send('peticion delete');
});

app.use(express.static('public'));

app.listen(app.get('PORT'), () => {
    console.log('Server on port', app.get('PORT'));
});