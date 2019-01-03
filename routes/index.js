var express = require('express');
var router = express.Router();
const knex = require('knex')(
  {
    client: 'pg',
    connection: { 
      port: 5432,
      host: 'localhost',
      database: 'carb-tracker',
      user: 'postgres',
      password: 'postgres'
    }
  }
)

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.select().table('users').then(function(data) {
    res.render('index', { title: 'Carb Tracker', users: data });
  })
});

module.exports = router;
