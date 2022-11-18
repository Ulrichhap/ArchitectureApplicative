import Item from "./items/Item";

export default interface ItemsRepository {
    getInventory(): Item[];
    saveInventory(items : Item[]): void;
}