

export interface RouteType {
    path: string;
    element: React.ComponentType;
    children?: RouteType[];
    index?: boolean;
}