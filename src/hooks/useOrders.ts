import { useQuery } from "@tanstack/react-query";
import { getOrdersService } from "@/services/getOrders";
import { useAuth } from "@/store";

export const useOrders = ({ page }: {
    page: number
}) => {
    const { user } = useAuth();
    const vendorId = user?.id;
    return useQuery({
        queryKey: ["orders", { page, vendorId }],
        queryFn: () => getOrdersService({
            page,
            vendorId
        }),
    });
};
