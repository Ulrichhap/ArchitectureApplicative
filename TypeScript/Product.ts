export default class Product {
    public sellIn: number;
    public quality: number;
    public type: string;

    constructor(sellIn: number, quality: number, type: string) {
        this.sellIn = sellIn;
        this.quality = quality;
        this.type = type;
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
            if (this.sellIn <= 5 && this.sellIn>0) {
                this.quality -= 3
            }
        } else if (this.sellIn = 0) {
            this.quality -= 2;
            --this.sellIn;
        }
        else {
            --this.sellIn;
            --this.quality;
        }

    }
}