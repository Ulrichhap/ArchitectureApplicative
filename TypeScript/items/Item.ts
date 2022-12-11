export default abstract class Item {
    public sellIn: number;
    public quality: number;
    public basePrice: number;
    public status: string;

    constructor(sellin: number, quality: number, status: string, basePrice: number) {
        this.sellIn = sellin;
        this.quality = quality;
        this.status = status;
        this.basePrice = basePrice;
    }

    public abstract update();

    public GetValue(): number {
        return (this.quality * 10) + this.basePrice;
    }
}