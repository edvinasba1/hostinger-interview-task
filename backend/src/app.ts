import { Application } from 'express';
import { Server } from 'http';
import * as express from 'express'
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

import { getPublicRoutes } from './components';

import { loggerMiddleware } from './middleware'

getPublicRoutes();

class App {

    // Private properties
    private app: Application;

    // Class constructor
    constructor() {
        this.app = express();
    }

    // Cors and bodyParser initialization method
    private initializeCors() {
        this.app
            .use(cors())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({ extended: false }));
    }

    private initializeMiddlewares() {
        this.app
            .use(loggerMiddleware);
    }

    // Public routes initialization method
    private initializePublicRoutes() {
        let publicRoutes = getPublicRoutes();
        publicRoutes.forEach(route => {
            this.app.use(route);
        });
    }

    // Initialize server features method
    // Some of features may require server instance. For example WebsocketServer.
    init(server?: Server) {
        this.initializeCors();
        this.initializeMiddlewares();
        this.initializePublicRoutes();
    }

    // Get application instance method
    getExpressApplication(): Application {
        return this.app;
    }
}

export default App;