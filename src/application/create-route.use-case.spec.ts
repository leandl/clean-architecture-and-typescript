import { RouteInMenoryRepository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case";

describe("CreateRouteUseCase Test", () => {
  it("should create a new route", async () => {
    const repository = new RouteInMenoryRepository();
    const createRouteUseCase = new CreateRouteUseCase(repository);

    const output = await createRouteUseCase.execute({
      title: "Minha rota",
      startPosition: { lat: 15, log: 15 },
      endPosition: { lat: 20, log: 20 }
    });

    expect(repository.items).toHaveLength(1)
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: "Minha rota",
      startPosition: { lat: 15, log: 15 },
      endPosition: { lat: 20, log: 20 },
      points: []
    })
  });
});