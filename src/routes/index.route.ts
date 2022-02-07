import { Router } from 'express';
import { Routes } from '@/interfaces';
import { IndexController } from '@/controllers';

export class IndexRoute implements Routes {
    public router = Router();
    public path = '/';
    private indexController = new IndexController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.index)
    }
}
