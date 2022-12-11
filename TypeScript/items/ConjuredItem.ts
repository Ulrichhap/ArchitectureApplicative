import Item from "./Item";

export default class ConjuredItem extends Item {
    public update() {
        this.sellIn--;
        this.quality -= 2;

        if (this.sellIn < 0)
            this.quality -= 2;
      
        if (this.quality < 0)
            this.quality = 0;

        if (this.quality > 50)
            this.quality = 50;
    }
}