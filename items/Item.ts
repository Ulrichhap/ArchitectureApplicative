export default abstract class Item {
    public sellIn: number;
    public quality: number;
    public status: string;

    constructor(sellin: number, quality: number, status: string) {
        this.sellIn = sellin;
        this.quality = quality;
        this.status = status;
    }

    public abstract update();
}