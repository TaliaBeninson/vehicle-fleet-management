const express = require('express')
require('./server/db/mongoose')
path = require('path'),
fs = require('fs'),
cors = require('cors'),
routers = require('./server/routes/routes.js');

const app = express();
const port = 3002;

app.use('/vehicles', express.static(path.join(__dirname, 'client/html/vehicles.html')));
// app.use('/list_users', express.static(path.join(__dirname, 'client/html/add_vehicle.html')));
app.use('/add_vehicle', express.static(path.join(__dirname, 'client/html/add_vehicle.html')));
app.use('/main', express.static(path.join(__dirname, 'client/html/index.html')));
app.use('/employees', express.static(path.join(__dirname, 'client/html/employees.html')));
app.use('/add_employee', express.static(path.join(__dirname, 'client/html/add_employee.html')));
// app.use('/add_lecture_to_conforence', express.static(path.join(__dirname, 'client/html/add_lecture_to_conforence.html')));
app.use('/css', express.static(path.join(__dirname, 'client/css')));
app.use('/js', express.static(path.join(__dirname, 'client/js')));

app.get('/', (req, res) => {
    fs.readFile('client/html/index.html', (err, html) => {
        if (err) {
            throw err;
        }

        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
    })
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routers);

const server = app.listen(port, () => {
    console.log('listening on port %s...', server.address().port);
});
