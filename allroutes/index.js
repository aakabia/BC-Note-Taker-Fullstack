const router = require('express').Router();

// Above,, I must make sure to use the router version of express here.

const notesRouter = require('./getnotes');

// Above, I import the routes from getnotes

router.use('/notes', notesRouter);

// Above, I assign these routes a path 

module.exports = router;

// Above, I export all the routes.