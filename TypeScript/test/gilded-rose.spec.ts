import Item from '../Item';
import Product from '../Product';
import Shop from '../Shop';

describe('Gilded Rose', () => {
    let shop;

    beforeEach(() => {
        let items = [
            new Item(10, 20, ''),
            new Item(0, 12, ''),
            new Item(10,0,''),
            new Item(5, 13, 'Aged Brie'),
            new Item(15, 50, 'Aged Brie'),
            new Item(40, 80, 'Sulfuras'),
            new Item(8, 33, 'Backstage'),
            new Item(2, 27, 'Backstage'),
        ];

        shop = new Shop(items);
    })

    // it('should create shop', () => {
    //     //let shop = new Shop();
    // });

    // it('should have items in shop', () => {
    //     //let shop = new Shop();
    //     expect(shop.items.length).toBe(1);
    // });

    it('should have sellin and quality', () => {
        //let shop = new Shop();
        expect(shop.items[0].sellIn).toBe(10);
        expect(shop.items[0].quality).toBe(20);
    });

    it('should update sellin and quality', () => {
        shop.updateQuality();
        expect(shop.items[0].sellIn).toBe(9);
        expect(shop.items[0].quality).toBe(19);
    });

    it('should decrease quality twice as fast after sell in', () => {
        shop.updateQuality();
        expect(shop.items[1].quality).toBe(10);
    });

    it('should not decrease quality below 0', () => {
        shop.updateQuality();
        expect(shop.items[2].quality).toBe(0);
    });

    it('should increase Aged Brie quality', () => {
        shop.updateQuality();
        expect(shop.items[3].quality).toBe(14);
    });

    it('should not increase quality above 50', () => {
        shop.updateQuality();
        expect(shop.items[4].quality).toBe(50);
    });

    it('should be sulfuras items', () => {
        shop.updateQuality();
        expect(shop.items[5].quality).toBe(80);
        expect(shop.items[5].sellIn).toBe(40);
    });

    it('should be Backstage passes items', () => {
        shop.updateQuality();
        expect(shop.items[6].quality).toBe(34);
    });
});
