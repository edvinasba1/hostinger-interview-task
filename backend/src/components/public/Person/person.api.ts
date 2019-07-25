import { Router } from 'express';
import personController from './person.controller';

const routePath = '/people'

export const router = Router().get(routePath, personController.GetPeople);