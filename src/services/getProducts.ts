import { api } from "@/api";
import { getProducts } from "@/api/apiURLs";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    show_price: boolean;
    available: boolean;
    featured: boolean;
    orders: number;
    createdAt: string;
    updatedAt: string;
    vendorId: number;
    categoryId: number;
    productImages: ProductImage[];
    options_groups: OptionsGroup[];
    user: {
        id: number;
        name: string;
        email: string;
        phone: string;
        image: string;
    }
    category: {
        id: number;
        name: string;
        image: string;
    }
}

export interface OptionsGroup {
    id: number;
    name: string;
    type: string;
    options: Option[];
}

export interface Option {
    id: number;
    name: string;
    value: string;
}


export interface ProductImage {
    id: number;
    image: string;
}

export interface ProductsResponse {
    count: number;
    pages: number | null;
    results: Product[]
}

export const getProductsService = async ({ vendorId }: {
    vendorId?: number;
}) => {
    const response = await api.get<ProductsResponse>(getProducts, {
        params: {
            vendorId: vendorId || undefined
        }
    });
    return response.data;
};