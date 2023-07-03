import express from "express";
import { AuthorsController } from "./AuthorsController";

const controller = new AuthorsController();

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);

export const authorsRouter = router;


