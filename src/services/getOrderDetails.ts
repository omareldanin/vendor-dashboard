import { api } from "@/api";
import { getOrderDetails } from "@/api/apiURLs";
import { Order } from "./getOrders";

interface GetOrderDeatilsResponse {
    message: string;
    order: Order
}

export const getOrderDetailsService = async (id: number,vendorId:number) => {
    const { data } = await api.get<GetOrderDeatilsResponse>(getOrderDetails + id,{params:{vendorId}});
    return data;
}