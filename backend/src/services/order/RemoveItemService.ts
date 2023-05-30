import prismaClient from "../../prisma";

interface ItemRequest{
    id_item: string;
}

class RemoveItemService{
    async execute({id_item}: ItemRequest){
        if(!id_item){
            throw new Error("Erro na definição do item a ser excluido");
        }
        const item = await prismaClient.item.delete({
            where:{id: id_item}
        });

        return item;
    }
}

export {RemoveItemService}