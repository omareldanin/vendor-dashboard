import { useQuery } from "@tanstack/react-query";
import { getOrdersService } from "@/services/getOrders";

export const useOrders = ({ page }: {
    page: number
}) => {
    return useQuery({
        queryKey: ["orders", page],
        queryFn: () => getOrdersService(page),
    });
};
