import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMenoryRepository } from "./route-in-memory.repository";

describe("RouteInMenoryRepository Test", () => {

  it("should insert a new route", async () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 15, log: 15 },
      endPosition: { lat: 20, log: 20 }
    }

    const route = new Route(routeProps);
    const repository = new RouteInMenoryRepository();

    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});