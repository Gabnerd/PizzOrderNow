import prismaClient from "../../prisma"

interface SendOrderRequest{
    id_pedido: string
}

class SendOrderService{
    async execute({id_pedido}: SendOrderRequest){
        const order = await prismaClient.pedido.update({data:{rascunho: false}, where:{id: id_pedido}});
        return order;
    }
}

export {SendOrderService};