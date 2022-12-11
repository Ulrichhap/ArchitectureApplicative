import ItemsRepository from "./ItemsRepository";

export default class Shop {
    public repository: ItemsRepository;

    constructor(repository: ItemsRepository) {
        this.repository = repository;
    }

    updateQuality() {
        let items = this.repository.getInventory();
        for (let i = 0; i < items.length; i++)
            items[i].update();
        this.repository.saveInventory(items);
    }

    // sellItem(status, quality) {
    //     let items= this.repository.findItem('','');
    //     for (let i = 0; i < items.length; i++) {

    //         if (items[i].status) {

    //         } else {
    //             return false
    //         }
    //     }
    // }
}