export type MenuType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export type ProductType = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
    id: string;
    userEmail: string;
    price: number;
    products: object[];
    status: string;
    createdAt: Date;
    intent_id?: String;
};
