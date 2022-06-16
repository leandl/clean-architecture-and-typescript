import crypto from "crypto";

export type LatLng = { lat: number, log: number };
export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      points: props.points || []
    }
  }

  get title() {
    return this.props.title;
  }

  private set title(title: string) {
    this.props.title = title;
  }

  updateTitle(title: string) {
    this.title = title;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(startPosition: LatLng) {
    this.props.startPosition = startPosition;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(endPosition: LatLng) {
    this.props.endPosition = endPosition;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  get points() {
    return this.props.points;
  }

  private set points(points: LatLng[]) {
    this.props.points = points;
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props
    };
  }
}