'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Foods', [
            {
                name: 'Cơm chiên kim chi',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-chien-kim-chi-a0fb68c1-0755-45b5-bd6a-907e99f65ee5.jpg',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn hải sản',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-hai-san-37293d1b-9277-4c96-8691-f3158cbf31e2.jpg',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn thịt bò nấm hương',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-thit-bo-a438f535-b271-4ee4-ae41-3d70bd2466de-1.jpg',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Combo gà rán khoai tây chiên kèm salad',
                cost: 70000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/ga-4-bef3ebee-bd07-4d8d-b193-18f7f8a3a99e.png',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm chiên kim chi',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-chien-kim-chi-a0fb68c1-0755-45b5-bd6a-907e99f65ee5.jpg',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn hải sản',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-hai-san-37293d1b-9277-4c96-8691-f3158cbf31e2.jpg',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn thịt bò nấm hương',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-thit-bo-a438f535-b271-4ee4-ae41-3d70bd2466de-1.jpg',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Combo gà rán khoai tây chiên kèm salad',
                cost: 70000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/ga-4-bef3ebee-bd07-4d8d-b193-18f7f8a3a99e.png',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm chiên kim chi',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-chien-kim-chi-a0fb68c1-0755-45b5-bd6a-907e99f65ee5.jpg',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn hải sản',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-hai-san-37293d1b-9277-4c96-8691-f3158cbf31e2.jpg',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn thịt bò nấm hương',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-thit-bo-a438f535-b271-4ee4-ae41-3d70bd2466de-1.jpg',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Combo gà rán khoai tây chiên kèm salad',
                cost: 70000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/ga-4-bef3ebee-bd07-4d8d-b193-18f7f8a3a99e.png',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm chiên kim chi',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-chien-kim-chi-a0fb68c1-0755-45b5-bd6a-907e99f65ee5.jpg',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn hải sản',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-hai-san-37293d1b-9277-4c96-8691-f3158cbf31e2.jpg',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm trộn thịt bò nấm hương',
                cost: 50000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/com-tron-thit-bo-a438f535-b271-4ee4-ae41-3d70bd2466de-1.jpg',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Combo gà rán khoai tây chiên kèm salad',
                cost: 70000,
                image: 'http://mauweb.monamedia.net/dualeofood/wp-content/uploads/2020/08/ga-4-bef3ebee-bd07-4d8d-b193-18f7f8a3a99e.png',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },


        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Foods', null, {});
    }
};
