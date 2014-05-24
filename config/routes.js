var users = require('./../app/controllers/mainController.js');

module.exports = function Routes(app){
	app.get('/', function(req,res) { users.index(req,res) });
};

