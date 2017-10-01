let express = require('express');
let router = express.Router();
let controllers = require('../controllers');
let tvController = controllers.tvController;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tv', tvController.getTV);
router.get('/tv/:id', tvController.getTVById);
router.post('tv', tvController.addTV);

module.exports = router;
