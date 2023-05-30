import prismaClient from "../../prisma";

interface FinishOrderRequest{
    id_pedido: string;
}

class FinishOrderService{
    async execute({id_pedido}: FinishOrderRequest){
        const order = await prismaClient.pedido.update({where: {id: id_pedido}, data:{status: true}});
        const orderItems = await prismaClient.pedido.findFirst({where:{id: id_pedido}}).items();
        let sumTotal = 0;
        for (let i = 0; i < orderItems.length; i++) {
            const item = orderItems[i];
            const produto = await prismaClient.produto.findFirst({where: {id: item.id_produto}});
            sumTotal += (Number(item.quantidade) * Number(produto.preco));
        }

        const orderReturn = {...order, totalPagar: sumTotal.toFixed(2)};

        return orderReturn;
    }
}

export {FinishOrderService}