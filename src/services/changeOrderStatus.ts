import { api } from "@/api";

export const changeOrderStatusService = async (orderId: number) => {
    const response = await api.patch(`api/order/${orderId}`, {
        status: 'preparing'
    });
    return response.data;
}