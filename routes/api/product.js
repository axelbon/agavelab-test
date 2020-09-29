const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../../passsport');

const { Product } = require('../../db');

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let products = await Product.findAll();
    let { items } = req.body;
    total = pantsTotal(items) + tshirtTotal(items) + hatTotal(items);

    res.send({ total });
});

const hatTotal = (items) => {
    //filter the items array to get the total of hat, then multiply for the price
    return items.filter(item => item === 'HAT').length * 7.50;
};

//function to validate pants offert
const pantsTotal = (items) => {
    /** ~~ > eliminates decimal **/
    //filter the items array to get the total of pants, then it gets divided by 2 to get the promotion
    var total = ~~(items.filter(item => item === 'PANTS').length / 2);
    return total * 5.00;
};

const tshirtTotal = (items) => {
    //gets the total of tshirts
    var length = items.filter(item => item === 'TSHIRT').length;
    //checks if the totalm of tshirts is more than 3 to make the price 19
    var price = length >= 3 ? 19.00 : 20.00;
    return length * price;
};

module.exports = router;