import Item from "./Item";

export default class Shop {
    public items: Item[] = [];

    constructor(items: Item[]) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].status == "Sulfuras") {
                return;
            }

            --this.items[i].sellIn;

            switch (this.items[i].status) {
                case "Aged Brie":
                    ++this.items[i].quality;
                    break;
                case "Backstage":
                    ++this.items[i].quality;
                    break;
                default:
                    --this.items[i].quality;

                    if (this.items[i].sellIn < 0)
                        --this.items[i].quality;
                    break;

            }

            // if (this.items[i].status == "Aged Brie") {
            //     ++this.items[i].quality;
            // } else if (this.items[i].status == "Backstage") {
            //     if (this.items[i].sellIn <= 10 && this.items[i].sellIn >= 6) {
            //         this.items[i].quality += 2;
            //     }
            //     if (this.items[i].sellIn <= 5 && this.items[i].sellIn > 0) {
            //         this.items[i].quality += 3
            //     }
            // } else {
            //     --this.items[i].quality;

            //     if (this.items[i].sellIn < 0)
            //         --this.items[i].quality;
            // }

            if (this.items[i].quality < 0) {
                this.items[i].quality = 0;
            }
            if (this.items[i].quality > 50) {
                this.items[i].quality = 50;
            }
        }
    }
}