import { Produto } from "@prisma/client";
import prismaClient from "../../prisma"

class ListProductService {
    async execute(q: string) {
        let products: Produto[];
        if (!q) {
            products = await prismaClient.produto.findMany();
        } else {
            products = await prismaClient.produto.findMany({ where: { nome: { contains: q } } });

        }
        return products;
    }
}

export { ListProductService }