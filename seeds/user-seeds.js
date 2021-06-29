const { User } = require('../models');

const userData = [
    {
        username: 'daniHartley12',
        email: 'dani@hartley.com',
        password: 'helloworld1234',
    },
    {
        username: 'chrisD987',
        email: 'chrisD@gmail.com',
        password: 'chris123',
    },
    {
        username: 'sonyaR456',
        email: 'sonyaR@gmail.com',
        password: 'sonya123',
    },
    {
        username: 'joseM234',
        email: 'joseM@gmail.com',
        password: 'joseM123',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;