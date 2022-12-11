import Item from "./items/Item";

export default interface ItemsRepository {
    getInventory(): Item[];
    findItem(status, quality):Item;
    saveInventory(items : Item[]): void;
}