import { Pedido } from "@prisma/client";
import prismaClient from "../../prisma";

interface ListLastOrderRequest {
    limit: number;
}

class ListLastOrderService {
    async execute({ limit }: ListLastOrderRequest) {
        let orders: Pedido[];
        if (!limit) {
             orders = await prismaClient.pedido.findMany({ orderBy: { criado_em: 'desc' } });
        } else {
             orders = await prismaClient.pedido.findMany({ orderBy: { criado_em: 'desc' }, take: limit });
        }
        return orders;
    }
}

export {ListLastOrderService}