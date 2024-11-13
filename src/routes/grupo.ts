import { Router } from "express";
import GrupoController from "../controllers/GrupoController";

const routes = Router();

routes.post('/', GrupoController.create);
routes.get('/', GrupoController.list);
routes.delete('/', GrupoController.delete);
routes.put('/', GrupoController.update);

export default routes;