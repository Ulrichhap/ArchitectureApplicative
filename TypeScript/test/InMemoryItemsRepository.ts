import AgingItem from '../items/AgingItem';
import ConjuredItem from '../items/ConjuredItem';
import EventItem from '../items/EventItem';
import GenericItem from '../items/GenericItem';
import LegendaryItem from '../items/LegendaryItem';
import ItemsRepository from "../ItemsRepository";
import Item from '../items/Item';

export default class InMemoryItemsRepository implements ItemsRepository {


    private items: Item[] = [
        new GenericItem(10, 20, '', 100),
        new GenericItem(0, 12, '', 100),
        new GenericItem(10, 0, '', 100),
        new AgingItem(5, 13, 'Aged Brie', 100),
        new AgingItem(15, 50, 'Aged Brie', 100),
        new LegendaryItem(40, 80, 'Sulfuras', 100),
        new EventItem(8, 32, 'Backstage', 100),
        new EventItem(2, 27, 'Backstage', 100),
        new EventItem(0, 27, 'Backstage', 100),
        new ConjuredItem(30, 27, 'Conjured', 100),
        new ConjuredItem(0, 27, 'Conjured', 100),
    ];

    getInventory(): Item[] {
        return this.items;
    }
    saveInventory(items: Item[]): void {
        this.items = items;
    }
    findItem(status: string, quality: number): Item {
        let item;
        for (let i = 0; i < this.items.length; i++) {
            if (status == this.items[i].status && quality == this.items[i].quality)
                item = this.items[i]
        }
        return item;
    }

}