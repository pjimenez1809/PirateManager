const Pirate = require('../models/pirate.model');

module.exports.findAllPirates= (req, res) => {
    Pirate.find()
    .then(allPirates=> res.json({pirates: allPirates}))
    .catch(err => res.json({error: err}));
}

module.exports.createNewPirate = (req, res) => {
    Pirate.create(req.body)
    .then(newPirate => res.send({pirate: newPirate}))
    .catch(err => res.status(409).send(err));
        // res.send({errors: err}));
}

module.exports.getOneSinglePirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
    .then(pirate => res.json({pirate: pirate}))
    .catch(err => res.status(404).json(err));
}

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedPirate => res.json({pirate: updatedPirate}))
    .catch(err => res.status(404).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
    .then(response => res.json({response: response}))
    .catch(err => res.json(err))
}

