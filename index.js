const http = require('http')
const port = 3000

const api = require('./api.js');




var express = require('express');
var app = express();

app.use(express.static('static'))

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api', api.getPatients)
app.get('/api/patientMeasurements/:patient', api.getPatientMeasurements)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


