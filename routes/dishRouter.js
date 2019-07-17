const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

// Url routes for dishes
dishRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send all dishes to you!')
})
.post((req, res, next) => {
  res.end('Will add the dish: ' + req.body.name + ' with details ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation is not supported by url dishes');
})
.delete((req, res, next) => {
  res.end('Deleting all the dishes!');
});


//Url routes for dishes with dishId
dishRouter.route('/:dishId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send all dishes with Id ' + req.params.dishId + ' to you!')
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation is not supprted by /dishes/' + req.params.dishId);
})
.put((req, res, next) => {
  res.end('We will update the dish: ' + req.body.name + ' with details: ' +  req.body.description);
})
.delete((req, res, next) => {
  res.end('Deleting the dish :' + req.params.dishId);
});


module.exports = dishRouter;
