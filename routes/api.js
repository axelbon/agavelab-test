const router = require('express').Router();

const apiProductRouter = require('./api/product');
const apiUserRouter = require('./api/users');

router.use('/products', apiProductRouter);
router.use('/users', apiUserRouter);

module.exports = router;