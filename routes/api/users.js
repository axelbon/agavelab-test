const router = require('express').Router();
const { User } = require('../../db');
const bcrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');

const { JWT_SECRET } = require('../../config/index');
const { route } = require('./product');

router.get('/test', (req, res) => res.json({ teseto: "teseto" }));

router.post('/register', [
    check('username', 'username is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    check('email', 'email is not valid or missing').isEmail()
], async (req, res) => {
    const found = await User.findOne({ where: { email: req.body.email } });
    if (found) { return res.status(403).json({ error: 'email already in use' }) };

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    const user = await User.create(req.body);

    res.status(200).json(user);
});

router.post('/login', [
    check('password', 'password is required').not().isEmpty(),
    check('email', 'email is not valid or missing').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    const user = await User.findOne({ where: { email: req.body.email } });

    if (user) {
        const equals = bcrypt.compareSync(req.body.password, user.password);
        if (equals) res.json({ TOKEN: createToken(user) });
    }
    res.status(403).json({ error: 'username or password are incorrect' });
});

const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    };

    return jwt.sign(payload, JWT_SECRET);
};

module.exports = router;