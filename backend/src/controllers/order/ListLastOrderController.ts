import { Request, Response } from "express";
import { ListLastOrderService } from "../../services/order/ListLastOrderService";

class ListLastOrderController{
    async handle(req: Request, res: Response){
        const limit = req.query.limit as any;
        const listLastOrderService = new ListLastOrderService();
        const lastOrders = await listLastOrderService.execute({limit});
        res.json(lastOrders);
    }
}

export {ListLastOrderController}