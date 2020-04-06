const express = require('express');
const app = express(); //con esto creo mi servidor

app.listen(3000, () => {
    console.log('Server on port  3000');
});

//middleware
app.use(express.json());


app.all('/', (req, res, next) => {
    console.log('siem,pre entrara');
    next();
});

app.get(('/') , (req, res) => {
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