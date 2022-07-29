// Modules for my Server

const express = require('express'); // Server Functions

const path = require('path'); // Directory Functions

const morgan = require('morgan'); // HTTP Functions

const indexRoutes = require('./route.js'); // Route Functions

const sql = require('./sql/sqlConection.js'); // SQL Functions



// Principal Variables

const app = express(); // Constant of my Server

// Routes

app.use(indexRoutes); // Use Routes

// HTTP Petitions

app.use(morgan('dev')); // Morgan Print a HTTP Petitions

// Petitions Frontend to Database


app.get('/add/:name/:age/:email', (req, res) => {  // GET Name, Age, Email of Frontend
    let name = req.params.name; // Name
    let email = req.params.email; // Email
    let age = req.params.age; // Age
    console.log(name ,email, age); // Print Data
    sql.addSQL(name, age, email); // Send Data to SQL JavaScript
    res.redirect('/'); // Redirect to /
})


// Settings

app.set('views', path.join(__dirname, 'views')); // Directory of Views

app.set('view engine', 'ejs'); // Engine of View

app.use(express.static(path.join(__dirname, 'public'))) // Directory of Public

// Port

app.listen(6060);

// Verify Express Server

console.log('Server is listening on port', 6060);
sql.connect()
