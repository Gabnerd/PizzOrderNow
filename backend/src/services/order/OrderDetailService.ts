import prismaClient from "../../prisma";

interface OrderDetailRequest{
    id_pedido: string;
}

class OrderDetailService{
    async execute({id_pedido}: OrderDetailRequest){
        const order = prismaClient.pedido.findFirst({where: {id: id_pedido}});
        let orderReturn = {...(await order), items: (await order.items())}
        return orderReturn;
    }
}

export {OrderDetailService}