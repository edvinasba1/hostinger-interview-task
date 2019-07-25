import App from './app';
import { logger } from './common/logger';

// Initializing new App instance
const app = new App();

// Port dependant on NODE_ENV variable
const port = process.env.NODE_ENV === 'production'? 8080 : 3030;

// Listening for server on specific port
const server = app.getExpressApplication().listen(port, () => {
    logger.trace(`Server is listening on port - ${port}.`);
    app.init(server); // Passing this server instance for future attachements. For example WebSockets.
});

// Exporting server instance as default
export default server;
