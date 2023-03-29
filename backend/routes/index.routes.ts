import {Request, Response, Router} from 'express'

const router = Router();

router.get("/", (req: Request ,res: Response)=>{
    res.send("<h1>Pizza Order API</h1>");
});

export default router;