const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

// Url routes for dishes
leaderRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send all leaders to you!')
})
.post((req, res, next) => {
  res.end('Will add the leader: ' + req.body.name + ' with details ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation is not supported by url leaders');
})
.delete((req, res, next) => {
  res.end('Deleting all the leaders!');
});


// Url routes for leaders with leadId
leaderRouter.route('/:leadId')
.get((req, res, next) => {
  res.end('Will send leader details with Id ' + req.params.leadId + ' to you!')
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation is not supprted by /leaders/' + req.params.leadId);
})
.put((req, res, next) => {
  res.end('We will update the leader: ' + req.body.name + ' with details: ' +  req.body.description);
})
.delete((req, res, next) => {
  res.end('Deleting the leader :' + req.params.leadId);
});


module.exports = leaderRouter;
