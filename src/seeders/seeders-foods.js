'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Foods', [
            {
                name: 'Cơm đảo thịt kho tàu',
                cost: 105000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2021031805371907371/photo/menueditor_item_aa698d0df546473aa2de9ce6e275848f_1616045807497647979.jpg',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm đảo dưa xào lòng',
                cost: 110000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2020081417294377380/photo/menueditor_item_e3bf0829443c40edb051952fb7c79c84_1597426179835183736.jpg',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm đảo gà rang',
                cost: 100000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKGV36TRN/photo/menueditor_item_b790094fedb94344b1cebaee4c6179e2_1593706867438222743.jpg',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cơm chim quay',
                cost: 175000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKJCKJTT6/photo/c39a9d62b1cc43c5a3c95c2446b90cc4_1570353550065170236.jpeg',
                foodtypeId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Canh cải nấu ngao',
                cost: 50000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2020092713182815372/photo/menueditor_item_0e5afdac353940fbabaea624f0505b06_1601212695257515449.jpg',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Canh chua thịt băm',
                cost: 50000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKJNNTAKE/photo/85842434d22241f891ce1e919e9d28df_1570354066247835152.jpeg',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Canh cải thịt',
                cost: 50000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKJRKJZGX/photo/ad7aa72c4026445187fa424c2bcc3e20_1570354081785653677.jpeg',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Canh ngao chua',
                cost: 70000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKJTYEYA6/photo/7d6d604bb38c45dba6a161bb4a55250f_1570354096551164225.jpeg',
                foodtypeId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cháo bò băm',
                cost: 50000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKJVK3WN6/photo/769a612bb67e44c8a500d34defa43fee_1570354116742278736.jpeg',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cháo ngao',
                cost: 55000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKKAKWXCT/photo/1ef6d3a02e4e4a739fd9cddbb26ee55f_1570354129329525888.jpeg',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cháo tim bầu dục',
                cost: 55000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKKCNTYGN/photo/1d334ec030d34e8e8a56d90913a0d78e_1570354141513224510.jpeg',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cháo tôm',
                cost: 77000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKKEKXXR2/photo/5defe1e013ed4c3d9c8a8ac4329675cb_1570354160392287147.jpeg',
                foodtypeId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cải xào nấm',
                cost: 45000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKKLKDWCX/photo/a1310dda830947b0b2c4d6052819810f_1570354297871533079.jpeg',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Trứng tráng óc',
                cost: 72000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKKSBEWGA/photo/22fe66cf24214c7798b6a9dc5c309e79_1570354333178930606.jpeg',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Trứng đúc thịt',
                cost: 60000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKKVBJJJT/photo/b6aa4654bd43467d985c3ea582c50c93_1570354368462034272.jpeg',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dưa xào cà chua',
                cost: 40000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKTELCARE/photo/58545cba8bd24f36abaea99f3b0e3fe1_1570354431770576158.jpeg',
                foodtypeId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Cua thịt hấp',
                cost: 500000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2021032304502307963/photo/menueditor_item_4dfbf4ab0a9945acae9d8bad2d26f765_1616475142827295038.jpg',
                foodtypeId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mực hấp',
                cost: 270000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2020072512522457546/photo/menueditor_item_dbac549fb6934d3d8cb926d049c1c051_1595681540328381919.jpg',
                foodtypeId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Hàu nướng',
                cost: 150000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKTLFWHEX/photo/9af44e7efce34c68b41a5c0429033c92_1570354520740892015.jpeg',
                foodtypeId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tôm hấp 1 đĩa 0,5kg',
                cost: 350000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKTELCARE/photo/58545cba8bd24f36abaea99f3b0e3fe1_1570354431770576158.jpeg',
                foodtypeId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gà rán',
                cost: 130000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKUTA4FTJ/photo/3f9dd282d9c64d158cbddcad3edb4812_1574764235366863519.jpg',
                foodtypeId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gà ác tần',
                cost: 90000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKVAAWZE6/photo/b31101bf4af3489eb08c7d110e1b2f54_1570355182676623374.jpeg',
                foodtypeId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chim hầm nấm hạt sen',
                cost: 165000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2020081718331959759/photo/menueditor_item_6e361f7ef1c8413c92fe0c2831bed9c6_1597689198295242858.jpg',
                foodtypeId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chim bồ câu quay',
                cost: 165000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKURAUWCJ/photo/11f0a88b8f1748fdb88fd6143aae6d2d_1570354920182591215.jpeg',
                foodtypeId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Trà chanh',
                cost: 15000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2020092713154156755/photo/menueditor_item_fc20d74845134ed0a7cfe470774d1a74_1601212528897217160.jpg',
                foodtypeId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Nước ép dứa',
                cost: 40000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/VNITE2020041114370060906/photo/menueditor_item_1768de793cf54052aa5bec7f0f33b451_1595681608933378155.jpg',
                foodtypeId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Nước cam vắt',
                cost: 40000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKVEX2TTJ/photo/379e5d0a9b8d41d8ad69a7844fb34d9c_1570355250474878659.jpeg',
                foodtypeId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Nước dưa hấu',
                cost: 40000,
                image: 'https://d1sag4ddilekf6.azureedge.net/compressed/items/5-CYLACZKGMBTCAX-CYLACZKVJAAYV2/photo/86fe03b97c864991b3272afaa828fedf_1570355263802996101.jpeg',
                foodtypeId: 7,
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
