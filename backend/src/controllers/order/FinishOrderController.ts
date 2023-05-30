import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

class FinishOrderController{
    async handle(req: Request, res: Response){
        const id_pedido = req.query.id_pedido as string;
        const finishOrderController = new FinishOrderService();
        const order = await finishOrderController.execute({id_pedido});
        res.json(order);
    }
}

export {FinishOrderController}