export interface Record_Props {
    id: number;
    item: string;
    date: number;
}

export interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    //props?: any;
}