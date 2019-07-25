import { Router } from 'express';
import * as fs from 'fs'

let publicModulesPath = __dirname + '/public';

export function getPublicRoutes(): Array<Router> {

    let publicRoutes: Array<Router> = [];

    fs.readdirSync(publicModulesPath).forEach(folder => {

        // Pattern after compiling typescript file .ts - ./public/Component/component.apis.js
        let modulePath = `${publicModulesPath}/${folder}/${folder.toLowerCase()}.api.js`;
        
        let exists = fs.existsSync(modulePath);

        if (!exists) {
            return
        }

        // Export variable in component.apis.ts file is named router 
        let route: Router = require(modulePath).router;

        publicRoutes.push(route);

    })

    return publicRoutes;
}