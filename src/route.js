const express = require('express');

const sql = require('./sql/sqlConection.js'); // SQL Functions

// Variables

const route = express.Router();

const cont = 'contact.id'

// Routes

route.get('/', (req, res) => {
    res.render('home')
})

route.get('/about', (req, res) => {
    res.render('about')
})

route.get('/contact', (req, res) => {
    sql.conector.query('SELECT * FROM contact', (err, result, field) => {
        res.render('contact', {
            datamove: result,
        })
    })
})

route.get('/contact/delete/:id', (req, res) => {
    const id = req.params.id;
    sql.conector.query(`DELETE FROM contact WHERE id = ${id}`,(err, result, field) => {
        if (err) {
            throw err
        }else {
            res.redirect('/contact')
        }
    })
})

// Export how module

module.exports = route;