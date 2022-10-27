import Product from '../Product';

describe('Gilded Rose', () => {
    let product;

    beforeEach(() => {
        product = new Product(20, 10, "Aged Brie");
        product.updateQuality();
    })

    it('Sell in updates correctly', () => {
        expect(product.sellIn).toBe(19);
    });

    it('Quality updates correctly', () => {
        expect(product.quality).toBe(11);
    });
});
