import { NextFunction, Request, Response } from "express";

export class IndexController {
    public index = async (req: Request, res: Response, next: NextFunction) => {
        try {
            return res.status(200).send('hello world!')
        } catch (error) {
            return next(error)
        }
    }
}