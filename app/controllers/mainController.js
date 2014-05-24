var mongoose = require('mongoose'),
User = mongoose.model('User');

module.exports = {
	index: function(req, res){
		res.render('./../app/views/mainPage_guest', {title:"Welcome Guest!"});	
	}
}