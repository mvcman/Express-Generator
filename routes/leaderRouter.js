const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const Leaders = require('../models/leaders');
const leaderRouter = express.Router();
const cors = require('./cors');
leaderRouter.use(bodyParser.json());

// Url routes for dishes
leaderRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req, res, next) => {
  Leaders.find({})
  .then((leaders) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leaders);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Leaders.create(req.body)
  .then((leader) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leader);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation is not supported by url /leaders');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Leaders.remove({})
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});


// Url routes for leaders with leadId
leaderRouter.route('/:leadId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req, res, next) => {
  Leaders.findById(req.params.leadId)
  .then((leader) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leader);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation is not supprted by /leaders/' + req.params.leadId);
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Leaders.findByIdAndUpdate(req.params.leadId, {
      $set: req.body
  }, { new: true })
  .then((leader) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leader);
  }, (err) => next(err))
  .catch((err) => next(err));
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
  Leaders.findByIdAndRemove(req.params.leadId)
  .then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
  }, (err) => next(err))
  .catch((err) => next(err));
});


module.exports = leaderRouter;
