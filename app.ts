import Product from "./Product";

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