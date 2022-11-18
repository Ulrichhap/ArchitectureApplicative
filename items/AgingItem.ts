import Item from "./Item";

export default class AgingItem extends Item {
    public update() {
        this.sellIn--;
        this.quality++;
        
        if (this.quality < 0)
            this.quality = 0;

        if (this.quality > 50)
            this.quality = 50;
    }
}