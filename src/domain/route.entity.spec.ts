import { LatLng, Route, RouteProps } from "./route.entity"

describe("Route Entity Test", () => {
  test("constructor", () => {
    const routePropsWithoutPoints: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 15, log: 15 },
      endPosition: { lat: 20, log: 20 },
    }

    const routePropsWithPoints = {
      ...routePropsWithoutPoints,
      points: [
        { lat: 15, log: 15 },
        { lat: 15, log: 15 }
      ]
    }

    const routeWithoutPoints = new Route(routePropsWithoutPoints);
    const routeWithPoints = new Route(routePropsWithPoints);

    expect(routeWithoutPoints.props).toStrictEqual({
      ...routePropsWithoutPoints, points: []
    });

    expect(routeWithPoints.id).toBeDefined();
    expect(routeWithPoints.props).toStrictEqual(routePropsWithPoints);
  });


  test("updateTitle method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 15, log: 15 },
      endPosition: { lat: 20, log: 20 }
    }

    const route = new Route(routeProps);
    route.updateTitle("title updated")
    expect(route.title).toBe("title updated");
  });

  test("updatePosition method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 15, log: 15 },
      endPosition: { lat: 20, log: 20 }
    }

    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 10, log: 20 };
    const endPosition: LatLng = { lat: 30, log: 40 };
    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test("updatePoints method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 15, log: 15 },
      endPosition: { lat: 20, log: 20 }
    }

    const route = new Route(routeProps);
    const points: LatLng[] = [
      { lat: 10, log: 20 }
    ];

    route.updatePoints(points);
    expect(route.points).toHaveLength(1);
    expect(route.points).toBe(points);
  });
})