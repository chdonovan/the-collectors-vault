const { Item } = require('../models');

const itemData = [
    {
        item_name: 'Ice Rider Calyrex',
        item_description: 'VMAX, Water Energy, with 320 HP, Chilling Reign',
        inventory: 2,
        category_name: 1,
        user_id: 1,
    },
    {
        item_name: 'Avery',
        item_description: 'Ultra Rare, Full Art, Trainer, Chilling Reign',
        inventory: 1,
        category_name: 1,
        user_id: 1,
    },
    {
        item_name: 'Tornadus',
        item_description: 'Rainbow Rare, VMAX, Colorless Energy, Chilling Reign',
        inventory: 1,
        category_name: 1,
        user_id: 1,
    },
    {
        item_name:  'Cristiano Ronaldo',
        item_description: '2016 Panini Flawless Momentous, 9.5 Grade',
        inventory: 1,
        category_name: 2,
        user_id: 2,
    },
    {
        item_name:  'The Amazing Spider-Man',
        item_description: "#667, Gabriele Dell'Otto Variant, Marvel",
        inventory: 1,
        category_name: 3,
        user_id: 3,
    },
    {
        item_name:  'Silver Surfer',
        item_description: '#44, Marvel',
        inventory: 1,
        category_name: 3,
        user_id: 3,
    },
    {
        item_name:  'Happier Than Ever',
        item_description: 'Billie Eilish, Pop',
        inventory: 1,
        category_name: 4,
        user_id: 4,
    },
    {
        item_name:  'Rumours',
        item_description: 'FleetWood Mac, Vinyl 33 & 1/3 RPM, Rock',
        inventory: 1,
        category_name: 4,
        user_id: 4,
    },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;