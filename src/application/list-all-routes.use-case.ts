import { LatLng } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

type CreateRouteOutput = {
  id: string
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}

export class ListAllRoutesUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(): Promise<CreateRouteOutput[]> {
    const routes = await this.routeRepo.findAll();
    return routes.map(route => route.toJSON());
  }
}