import Shop from '../Shop';
import InMemoryItemsRepository from './InMemoryItemsRepository';

describe('Gilded Rose', () => {
    let shop;
    let repository;

    beforeEach(() => {
        repository = new InMemoryItemsRepository()
        shop = new Shop(repository);
    })

    it('should have sellin and quality', () => {
        expect(repository.getInventory()[0].sellIn).toBe(10);
        expect(repository.getInventory()[0].quality).toBe(20);
    });

    it('should update sellin and quality', () => {
        shop.updateQuality();
        expect(repository.getInventory()[0].sellIn).toBe(9);
        expect(repository.getInventory()[0].quality).toBe(19);
    });

    it('should decrease quality twice as fast after sell in', () => {
        shop.updateQuality();
        expect(repository.getInventory()[1].quality).toBe(10);
    });

    it('should not decrease quality below 0', () => {
        shop.updateQuality();
        expect(repository.getInventory()[2].quality).toBe(0);
    });

    it('should increase Aged Brie quality', () => {
        shop.updateQuality();
        expect(repository.getInventory()[3].quality).toBe(14);
    });

    it('should not increase quality above 50', () => {
        shop.updateQuality();
        expect(repository.getInventory()[4].quality).toBe(50);
    });

    it('should be sulfuras items', () => {
        shop.updateQuality();
        expect(repository.getInventory()[5].quality).toBe(80);
        expect(repository.getInventory()[5].sellIn).toBe(40);
    });

    it('should be Backstage passes items', () => {
        shop.updateQuality();
        expect(repository.getInventory()[6].quality).toBe(34);
        expect(repository.getInventory()[7].quality).toBe(30);
        expect(repository.getInventory()[8].quality).toBe(0);
    });

    it('should be Conjured  items', () => {
        shop.updateQuality();
        expect(repository.getInventory()[9].quality).toBe(25);
        expect(repository.getInventory()[10].quality).toBe(23);
    });
});
