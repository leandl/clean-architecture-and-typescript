import express, { Express, Request, Response } from "express";

import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";

import { RouteInMenoryRepository } from "../../db/route-in-memory.repository";

const app: Express = express();
app.use(express.json());

const EXPRESS_PORT = process.env.PORT || 3000;
const routeInMenoryRepository = new RouteInMenoryRepository();

app.get("/routes", async (_req: Request, res: Response) => {
  const listAllRoutesUseCase = new ListAllRoutesUseCase(routeInMenoryRepository);
  const output = await listAllRoutesUseCase.execute();
  res.json(output);
});

app.post("/routes", async (req: Request, res: Response) => {
  const createRouteUseCase = new CreateRouteUseCase(routeInMenoryRepository);
  const output = await createRouteUseCase.execute(req.body)
  res.status(201).json(output);
});


app.listen(EXPRESS_PORT, () => {
  console.log(`Servidor rodando na porta: ${EXPRESS_PORT}`);
});