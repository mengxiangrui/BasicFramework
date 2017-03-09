// mock/db.js
'use strict'
const faker = require('faker')

module.exports = function() {

    let data = {

        'activity': [
            {
                name: 'a',
                title: faker.lorem.words(),
                img: faker.image.image()
            },
            {
                name: 'b',
                title: faker.lorem.words(),
                img: faker.image.image()

            }
        ]
        
    }

    return data
}