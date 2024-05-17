const router = require('express').Router();

const notesRouter = require('./getnotes');

router.use('/getnotes', notesRouter);

module.exports = router;