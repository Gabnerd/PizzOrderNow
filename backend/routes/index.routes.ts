import {Request, Response, Router} from 'express'
import mesaRouter from './mesa.routes'
import pedidoRouter from './pedido.routes'

const router = Router();

router.get("/", (req: Request ,res: Response)=>{
    res.send("<h1>Pizza Order API</h1>");
});

router.use(mesaRouter);
router.use(pedidoRouter);

export default router;