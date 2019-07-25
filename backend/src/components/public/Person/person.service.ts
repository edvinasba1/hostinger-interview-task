import * as faker from 'faker';

// Importing a product model
import { Person } from "./person.model";

// Implementation of random Singleton user service
class PersonService {
    
    // Let's make this private to avoid possible direct mutation.
    private items = [];

    // Constructor
    constructor() {
       this.initializeRandomPeople(); 
    }

    // Random people initializer. Item array is filled with fake people identities (fist name, last name, job area...)
    private initializeRandomPeople(quantity?: number):void {
        let defaultQuantity = 10000;
        let products = [];

        for (let i = 0; i < (quantity || defaultQuantity); i++) {
            let currentProduct = new Person();

            currentProduct.id = faker.random.uuid();
            currentProduct.firstName = faker.name.firstName();
            currentProduct.lastName = faker.name.lastName();
            currentProduct.jobArea = faker.name.jobArea();

            products = [...products, currentProduct];
        }
        
        this.items = products;
    }

    // Get overall amount of items.
    public getItemCount():number {
        return this.items.length;
    }

    // Calculation of page count is dependant on page size which we receive from ui.
    public getPageCount(pageSize = 50):number {
        return Math.ceil(this.items.length / pageSize);
    }

    // Slice items based on skip and limit query params.
    public getItems(skip = 0, limit = this.items.length) {
        return this.items.slice(skip, limit);
    }
}

export default new PersonService();