var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name:  String,
  last_name:  String,
  user_name: String,
  email: String,
  password: String,
  birthdate: Date,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});

UserSchema.path('first_name').required(true, 'First name cannot be blank');
UserSchema.path('last_name').required(true, 'Last name cannot be blank');
UserSchema.path('user_name').required(true, 'User name cannot be blank');
UserSchema.path('email').required(true, 'Email cannot be blank');
UserSchema.path('password').required(true, 'Password cannot be blank');
UserSchema.path('birthdate').required(true, 'Birthdate cannot be blank');
mongoose.model('User', UserSchema);
