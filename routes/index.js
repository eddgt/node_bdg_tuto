let express = require('express');
let router = express.Router();
let controllers = require('../controllers');
let tvController = controllers.tvController;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * ruteo de tv
 */
router.get('/tv', tvController.getTV);
router.get('/tv/:id', tvController.getTVById);
router.post('/tv', tvController.addTV);
router.put('/tv/:id', tvController.updateTV);
router.delete('/tv/:id', tvController.deleteTV);

module.exports = router;
