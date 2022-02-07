import * as express from 'express';
import { Routes } from '@/interface';
import { logger } from '@/utils';

export class App {
    private app: express.Application;
    private port: string | number;
    private env: string;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = process.env.PORT as string | 3800;
        this.env = process.env.NODE_ENV || 'development';
    }

    /**
     * listen
     */
    public listen() {
        this.app.listen(this.port, () => {
            logger.info(`======= ENV: ${this.env} =======`);
            logger.info(`🚀 App listening on the port ${this.port}`);
        });
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach(route => {
            this.app.us
        })
    }
}
