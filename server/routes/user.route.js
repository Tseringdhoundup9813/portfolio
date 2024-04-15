import express from "express"
import {createConnection} from "../controllers/user.controller.js"
const router  = express.Router();

router.route('/user')
        .post(createConnection)


export default router;