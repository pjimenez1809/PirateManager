const PirateController = require('../controllers/pirate.controllers');

module.exports = app => {
    app.get('/api/pirates', PirateController.findAllPirates);
    app.put('/api/pirates/update/:id', PirateController.updatePirate);
    app.get('/api/pirates/:id', PirateController.getOneSinglePirate);
    app.post('/api/pirates/new', PirateController.createNewPirate);
    app.delete('/api/pirates/delete/:id', PirateController.deletePirate);
}
