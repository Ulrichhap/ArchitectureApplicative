class Product {
    sellIn: number;
    quality: number;
    type: string;


    constructor(sellIn: number, quality: number, type: string) {
        this.sellIn = sellIn;
        this.quality = quality;
        this.type = type;
        this.quality <= 0;
    }

    updateQuality(): void {
        if (this.type = "Aged Brie") {
            --this.sellIn;
            ++this.quality;
        } else if (this.type = "Sulfuras") {
            console.log('it s a legendary item, then it never has to be sold or decreases in `quality`')
        } else if (this.type = "Backstage passes") {
            --this.sellIn;
            if (this.sellIn <= 10 && this.sellIn >= 6) {
                this.quality -= 2
            }
            if (this.sellIn <= 5) {
                this.quality -= 3
            }
        } else {
            --this.sellIn;
            --this.quality;
        }

    }

    Death_Product(): void {
        this.quality -= 2;
        --this.sellIn;
    }
}

var Naruto_Card = new Product(20,10,"Sulfuras");
