import { Request, Response } from "express";

 export const index = (req: Request, res: Response) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
};