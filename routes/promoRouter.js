const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

// Url routes for promotions
promoRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send all promotions to you!')
})
.post((req, res, next) => {
  res.end('Will add the promo: ' + req.body.name + ' with details ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation is not supported by url promotions');
})
.delete((req, res, next) => {
  res.end('Deleting all the promotions!');
});


// Url routes for promotions with promoId
promoRouter.route('/:promoId')
.get((req, res, next) => {
  res.end('Will send all promotions with Id ' + req.params.promoId + ' to you!')
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation is not supprted by /promotions/' + req.params.promoId);
})
.put((req, res, next) => {
  res.end('We will update the promo: ' + req.body.name + ' with details: ' +  req.body.description);
})
.delete((req, res, next) => {
  res.end('Deleting the promo :' + req.params.promoId);
});


module.exports = promoRouter;
