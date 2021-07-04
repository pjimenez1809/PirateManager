const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        unique: [true, "Username ya existe, intente con uno diferente"],
        required: [true, "Este campo es requerido"],    
        maxLength: [15, 'No debe exceder los 15 caracteres'],
        minLength: [6, 'Debe tener al menos 6 caracteres']    
    },
    last_name: {
        type: String,
        required: [true, "Este campo es requerido"],
        maxLength: [15, 'No debe exceder los 15 caracteres'],
        minLength: [6, 'Debe tener al menos 6 caracteres']    

    },
    email: {
       type: String,
       unique: [true, "Email ya existe, intente con uno diferente"],
       required: [true, "Este campo es requerido"],
       maxLength: [50, 'No debe exceder los 50 caracteres'],
       minLength: [15, 'Debe tener al menos 15 caracteres']

    },
    password: {
        type: String,
        required: [true, "Este campo es requerido"],
        maxLength: [8, 'No debe exceder los 8 caracteres'],
        minLength: [8, 'Debe tener al menos 8 caracteres']

    }
},
{timestamps: true}
);

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    });
});

const User = mongoose.model('User', UserSchema);
UserSchema.plugin(uniqueValidator);

module.exports = User;
