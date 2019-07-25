import {
    Request,
    Response
} from 'express';

import { Person } from './person.model';

import { GetPeopleResponse } from './person.interface';

import personService from './person.service';

class PersonController {

    // Controller for [GET] request.
    public async GetPeople(req: Request, res: Response) {
        try {

            let { 
                skip,
                limit,
                pageSize,
            } = req.query;

            if (skip) {
                skip = parseInt(skip);
            }

            if (limit) {
                limit = parseInt(limit);
            }

            if (pageSize) {
                pageSize = parseInt(pageSize);
            }
            
            let people:Person[] = personService.getItems(skip, limit);
            let pageCount:number = personService.getPageCount(pageSize);
            let itemCount:number = personService.getItemCount();

            let response:GetPeopleResponse = {
                items: people,
                pageCount: pageCount,
                itemCount: itemCount
            }

            res.send(response);
        }
        catch (e) {
            res.send(e.message), 400;
        }
    }
}

export default new PersonController();