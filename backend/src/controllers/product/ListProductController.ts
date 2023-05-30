import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

class ListProductController{
    async handle(req: Request, res: Response){
        const query = req.query.q as string;
        const listProductService = new ListProductService();
        const products = await listProductService.execute(query);
        res.json(products);
    }
}

export {ListProductController}