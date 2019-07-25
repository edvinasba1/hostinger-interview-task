import { Person } from './person.model';

export interface GetPeopleResponse {
    items:Person[],
    pageCount:number,
    itemCount:number,
}