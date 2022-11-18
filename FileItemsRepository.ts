import AgingItem from "./items/AgingItem";
import ConjuredItem from "./items/ConjuredItem";
import EventItem from "./items/EventItem";
import GenericItem from "./items/GenericItem";
import Item from "./items/Item";
import LegendaryItem from "./items/LegendaryItem";
import ItemsRepository from "./ItemsRepository";


export default class FileItemsRepository implements ItemsRepository  {
    private items : Item[] = [
        new GenericItem(10, 20, ''),
        new GenericItem(0, 12, ''),
        new GenericItem(10, 0, ''),
        new AgingItem(5, 13, 'Aged Brie'),
        new AgingItem(15, 50, 'Aged Brie'),
        new LegendaryItem(40, 80, 'Sulfuras'),
        new EventItem(8, 32, 'Backstage'),
        new EventItem(2, 27, 'Backstage'),
        new EventItem(0, 27, 'Backstage'),
        new ConjuredItem(30, 27, 'Conjured'),
        new ConjuredItem(0, 27, 'Conjured'),
    ];
    
    getInventory(): Item[] {
        return this.items;
    }
    saveInventory(items: Item[]): void {
        this.items = items; 
    }

}