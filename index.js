"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sellIn, quality, type) {
        this.sellIn = sellIn;
        this.quality = quality;
        this.type = type;
    }
    Product.prototype.updateQuality = function () {
        if (this.type = "Aged Brie") {
            --this.sellIn;
            ++this.quality;
        }
        else if (this.type = "Sulfuras") {
            console.log('it s a legendary item, then it never has to be sold or decreases in `quality`');
        }
        else if (this.type = "Backstage passes") {
            --this.sellIn;
            if (this.sellIn <= 10 && this.sellIn >= 6) {
                this.quality -= 2;
            }
            if (this.sellIn <= 5 && this.sellIn > 0) {
                this.quality -= 3;
            }
        }
        else if (this.sellIn = 0) {
            this.quality -= 2;
            --this.sellIn;
        }
        else {
            --this.sellIn;
            --this.quality;
        }
    };
    return Product;
}());
exports.Product = Product;
var Naruto_Card = new Product(20, 10, "Sulfuras");
var dragonball_Card = new Product(20, 10, "Backstage passes");
var onepiece_Card = new Product(20, 10, "Aged Brie");
var blackclover_Card = new Product(20, 10, "");

Naruto_Card.updateQuality();
dragonball_Card.updateQuality();
onepiece_Card.updateQuality();
blackclover_Card.updateQuality();

console.log(Naruto_Card);
console.log(dragonball_Card);
console.log(onepiece_Card);
console.log(blackclover_Card);
