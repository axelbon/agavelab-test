const { Product } = require('../../db');


(async () => {
    let pants = await Product.findOrCreate({
        where: { code: 'PANTS' },
        defaults: {
            code: 'PANTS',
            name: 'Pants',
            price: 5.00
        }
    });
    console.log(`code: ${pants[0].dataValues.code} `);
    
    let tshirt = await Product.findOrCreate({
        where: { code: 'TSHIRT' },
        defaults: {
            code: 'TSHIRT',
            name: 'T-shirt',
            price: 20.00
        }
    });
    console.log(`code: ${tshirt[0].dataValues.code} `);

    let hat = await Product.findOrCreate({
        where: { code: 'HAT' },
        defaults: {
            code: 'HAT',
            name: 'Hat',
            price: 7.50
        }
    });
    console.log(`code: ${hat[0].dataValues.code} `);
    
})();