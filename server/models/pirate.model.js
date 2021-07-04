const mongoose = require('mongoose');

var uniqueValidator = require('mongoose-unique-validator');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, 'Este es un campo requerido'],
        maxLength: [30, 'No debe exceder los 30 caracteres'],
        minLength: [5, 'Nombre de al menos 5 caracteres']
    },
    image_url: {
        type: String,
        required : [true, 'Este es un campo requerido'],
        maxLength: [150, 'No debe exceder los 150 caracteres'],
        minLength: [20, 'Nombre de al menos 25 caracteres']
    },
    crew_position: {
        type: String,
        required : [true, 'Este es un campo requerido'],
      /*   unique   : [true, "Asignación de Pirata debe ser única"], */
        maxLength: [40, 'No debe exceder los 40 caracteres'],
        minLength: [7, 'Nombre de al menos 7 caracteres']

    },
    peg_leg: {
        type: Boolean,
        required : [true, 'Este es un campo requerido'],
        maxLength: [5, 'No debe exceder los 5 caracteres'],
        minLength: [4, 'No DEbe execeder los 5 caracteres'],
        default: true

    },
    eye_patch: {
        type: Boolean,
        required : [true, 'Este es un campo requerido'],
        maxLength: [5, 'No debe exceder los 5 caracteres'],
        minLength: [4, 'No DEbe execeder los 5 caracteres'],
        default: true
    },
    hook_hand: {
        type: Boolean,
        required : [true, 'Este es un campo requerido'],
        maxLength: [5, 'No debe exceder los 5 caracteres'],
        minLength: [4, 'No DEbe execeder los 5 caracteres'],
        default: true

    },
    treasures: {
        type: Number,
        required : [true, 'Este es un campo requerido'],
        default : 0      

    },
    pirate_phrase: {
        type: String,
        required : [true, 'Este es un campo requerido'],
        maxLength: [50, 'No debe exceder los 150 caracteres'],
        minLength: [10, 'Debe tener al menos 10 caracteres']
    },
}, {timestamps: true}
);

PirateSchema.plugin(uniqueValidator, { message: 'Error, Posición debe ser unica.' });

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;
