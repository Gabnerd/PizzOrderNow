import { Request, Response } from "express";
import { OrderDetailService } from "../../services/order/OrderDetailService";

class OrderDetailController{
    async handle(req: Request, res: Response){
        const id_pedido = req.params.id_pedido as string;
        const orderDetailService = new OrderDetailService();
        const order = await orderDetailService.execute({id_pedido});
        res.json(order);
    }
}

export {OrderDetailController}