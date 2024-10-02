export interface IMenu{
    name: string;
    href: string;
    children: Object [];
}

export class ImenuList{
    menus: IMenu[];
}